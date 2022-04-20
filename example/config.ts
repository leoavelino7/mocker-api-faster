import { Config } from "mocker-api-faster";
import { join } from "path";
import dotenv from "dotenv";

dotenv.config();

const {
  FIXTURE_PATH = "fixtures",
  ROUTES_PATH = "routes",
  API_PORT = 8000,
  URL_INIT = "/",
  URL_MOCKS_LIST = "/mocks",
  APP_NAME = "API Mocker",
  NODE_ENV,
} = process.env;

const isDevelopmentMode = NODE_ENV === "development";

const getAbsolutePath = (path: string) => join(__dirname, isDevelopmentMode ? "" : "..", path);

export const config: Config = {
  FIXTURE_PATH: getAbsolutePath(FIXTURE_PATH),
  ROUTES_PATH: getAbsolutePath(ROUTES_PATH),
  PORT: Number(API_PORT),
  URL_INIT,
  URL_MOCKS_LIST,
  APP_NAME,
  LOGGER_INIT: `⚡️[server]: Server is running at https://localhost:${API_PORT}`,
};
