import express from "express";
import cors from "cors";

import { defaultConfig } from "./config";
import { headerMiddleware, delayMiddleware } from "./middlewares";
import { registerRoutes } from "./registerRoutes";

const app = express();

app.use(cors());
app.use(headerMiddleware);
app.use(delayMiddleware);

export const mockerApi = {
  listen: (config = defaultConfig) => {
    registerRoutes(app, config);
    app.listen(config.PORT, () => console.log(config.LOGGER_INIT));
  },
};
