import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

import config from "./config";
const { isDev, port } = config;

console.debug(
  `This is a ${isDev ? "Development" : "Production"} release on port '${port}'`
);

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.set("port", port);
console.debug(`http://localhost:${app.get("port")} is ready`);

export default app;
