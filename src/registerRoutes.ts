import { Express, Request, Response } from "express";

import { Config } from "./config";
import { mock } from "./lib/mock";
import handleResponse from "./lib/handleResponse";

export const registerRoutes = (app: Express, config: Config) => {
  mock.getAddress().map((item) => {
    const [method, endpoint] = item.split("_");
    (app as any)[method](endpoint, (request: Request, response: Response) =>
      handleResponse(request, response)
    );
  });
  
  app.get(config.URL_MOCKS_LIST, (_, response) =>
    response.send(mock.getAddress())
  );
};
