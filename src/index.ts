import express, { Request, Response } from "express";
import cors from "cors";
import config from "./config";

import "./routes";

import { headerMiddleware, delayMiddleware } from "./middlewares";

import handleResponse from "./lib/handleResponse";
import mock from "./lib/mock";

const app = express();

app.use(cors());
app.use(headerMiddleware);
app.use(delayMiddleware);

mock.getAddress().map((item) => {
  const [method, endpoint] = item.split("_");
  (app as any)[method](endpoint, (request: Request, response: Response) =>
    handleResponse(request, response)
  );
});

app.get(config.URL_MOCKS_LIST, (_, response) =>
  response.send(mock.getAddress())
);
app.listen(config.PORT, () => console.log(config.LOGGER_INIT));
