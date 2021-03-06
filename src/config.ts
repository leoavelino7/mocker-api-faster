export type Config = {
  FIXTURE_PATH: string;
  ROUTES_PATH: string;
  PORT: number;
  URL_INIT: string;
  URL_MOCKS_LIST: string;
  APP_NAME: string;
  LOGGER_INIT: string;
};

const PORT = 3333;

export const defaultConfig: Config = {
  FIXTURE_PATH: "",
  ROUTES_PATH: "",
  PORT,
  URL_INIT: "/",
  URL_MOCKS_LIST: "/mocks",
  APP_NAME: "Mocker API",
  LOGGER_INIT: `⚡️[server]: Server is running at https://localhost:${PORT}`,
};
