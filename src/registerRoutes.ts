import { Express, Request, Response } from "express";
import { existsSync, readdirSync } from "fs";
import { join } from "path";

import { Config } from "./config";
import { mock } from "./lib/mock";
import handleResponse from "./lib/handleResponse";
import {
  Method,
  MockConfig,
  MockExpected,
  MockFixture,
  MockItem,
} from "./lib/mock/types";

export const registerRoutes = (app: Express, config: Config) => {
  if (existsSync(config.ROUTES_PATH)) {
    const routesFiles = readdirSync(config.ROUTES_PATH);

    const list = routesFiles
      .map((file) => {
        const mockConfig = require(join(
          config.ROUTES_PATH,
          file
        )) as MockConfig;

        const mockList: MockItem[] = mockConfig.routes.map((item) => {
          const path = `${mockConfig.config.prefix_path ?? ""}${
            item.path ?? ""
          }`.toLowerCase();

          const method = item.method.toLowerCase() as Method;

          (app as any)[method](path, (request: Request, response: Response) =>
            handleResponse(request, response)
          );

          const response = Object.entries(item.expected.response).reduce(
            (previous, current) => {
              const [statusCode, values] = current;
              const { fixture, ...rest } = values;

              const fixtureLoaded = Object.entries(fixture).reduce(
                (previous, current) => {
                  const [fixtureName, value] = current;
                  const { file, ...rest } = value;
                  return {
                    ...previous,
                    [fixtureName]: {
                      file: require(`${config.FIXTURE_PATH}${
                        mockConfig.config.prefix_fixture ?? ""
                      }${file}`),
                      ...rest,
                    },
                  };
                },
                {} as MockFixture
              );

              return {
                ...previous,
                [statusCode]: {
                  fixture: fixtureLoaded,
                  ...rest,
                },
              };
            },
            {} as MockExpected["response"]
          );

          return {
            path,
            method,
            expected: {
              ...item.expected,
              response,
            },
          };
        });

        return mockList;
      })
      .flat();

    mock.addMany(list);
  }

  app.get(config.URL_INIT, (_: Request, response: Response) =>
    response.send(config.APP_NAME)
  );

  app.get(config.URL_MOCKS_LIST, (_: Request, response) =>
    response.send(mock.getAddress())
  );
};
