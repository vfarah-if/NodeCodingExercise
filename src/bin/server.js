import app from "../app";
import debugLib from "debug";
import { createServer } from "http";
import config from "../config";
import listEndpoints from "express-list-endpoints";
import { connect } from "../database";

const debug = debugLib("test-express:server");
const { port } = config;
const iisPort = getPortAndConfigureIISExpress();
const server = generateServer();
connectMongoDb();

async function connectMongoDb() {
  const result = await connect(true);
  return result;
}

function generateServer() {
  const result = createServer(app);
  result.listen(iisPort);
  result.on("error", onError);
  result.on("listening", onListening);
  return result;
}

function getPortAndConfigureIISExpress() {
  const result = normalizePort(port);
  app.set("port", result);
  return result;
}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind =
    typeof iisPort === "string" ? "Pipe " + iisPort : "Port " + iisPort;

  makeErrorsMoreInformative();

  function makeErrorsMoreInformative() {
    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
      default:
        throw error;
    }
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
  console.debug(listEndpoints(app));
  console.debug(`http://localhost:${app.get("port")} is ready`);
}
