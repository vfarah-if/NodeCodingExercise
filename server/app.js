import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import coursesRouter from "./routes/courses";

import config from "./config";
const { isDev, port } = config;

console.debug(
  `This is a ${
    isDev ? "Development" : "Production"
  } release preparing API on port '${port}'`
);

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/courses", coursesRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
