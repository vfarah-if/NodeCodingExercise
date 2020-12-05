import app from "../app";
import debugLib from "debug";
import { createServer } from "http";
import config from "../config";
import listEndpoints from "express-list-endpoints";
import { connectDatabase, disconnectDatabase } from "../database";
import serverless from "serverless-http";

const debug = debugLib("test-express:server");
const { port } = config;
const iisPort = getPortAndConfigureIISExpress();
const server = generateServer();
connectMongoDb();
process.on('exit', async() => {
  console.debug('Disconnecting from database.');
  await disconnectDatabase();
});
export const handler = serverless(app);

async function connectMongoDb() {
  // REMARKS: Change the true to false if you want to connect to a durable database
  const result = await connectDatabase(true);
  return result;
}

function generateServer() {
  const result = createServer(app);
  result.listen(iisPort);
  result.on("listening", onListening);
  return result;
}

function getPortAndConfigureIISExpress() {
  const result = normalizePort(port);
  app.set("port", result);
  return result;
}

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

function onListening() {
  const addr = server.address();
  const bind = extractAddressInformation(addr);
  debug("Listening on " + bind);
  console.debug(listEndpoints(app));
  console.debug(`http://localhost:${app.get("port")} is ready`);
}

function extractAddressInformation(addr) {
  return typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
}
