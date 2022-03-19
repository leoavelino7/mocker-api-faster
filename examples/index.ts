import { mockerApi } from "mocker-api-faster";
import { config } from "./config";

import "./routes";

mockerApi.listen(config);
