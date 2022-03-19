import { Config } from "mocker-api-faster";

const PORT = 8000;

export const config: Config = {
  PORT,
  URL_INIT: "/",
  URL_MOCKS_LIST: "/mocks",
  APP_NAME: "Mocker API",
  LOGGER_INIT: `⚡️[server]: Server is running at https://localhost:${PORT}`,
};
