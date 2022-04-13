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
} = process.env;

export const config: Config = {
  FIXTURE_PATH: join(__dirname, FIXTURE_PATH),
  ROUTES_PATH: join(__dirname, ROUTES_PATH),
  PORT: Number(API_PORT),
  URL_INIT,
  URL_MOCKS_LIST,
  APP_NAME,
  LOGGER_INIT: `⚡️[server]: Server is running at https://localhost:${API_PORT}`,
};
