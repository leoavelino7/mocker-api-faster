declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FIXTURE_PATH: string;
      ROUTES_PATH: string;
      API_PORT: string;
      URL_INIT: string;
      URL_MOCKS_LIST: string;
      APP_NAME: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
