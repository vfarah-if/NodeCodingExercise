"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("../app"));

var _debug = _interopRequireDefault(require("debug"));

var _http = require("http");

var _config = _interopRequireDefault(require("../config"));

var _expressListEndpoints = _interopRequireDefault(require("express-list-endpoints"));

var debug = (0, _debug["default"])('test-express:server');
var port = _config["default"].port;
var iisPort = getPortAndConfigureIISExpress();
var server = generateServer();

function generateServer() {
  var result = (0, _http.createServer)(_app["default"]);
  result.listen(iisPort);
  result.on('error', onError);
  result.on('listening', onListening);
  return result;
}

function getPortAndConfigureIISExpress() {
  var result = normalizePort(port);

  _app["default"].set('port', result);

  return result;
}

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof iisPort === 'string' ? 'Pipe ' + iisPort : 'Port ' + iisPort;
  makeErrorsMoreInformative();

  function makeErrorsMoreInformative() {
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);

      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);

      default:
        throw error;
    }
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.debug((0, _expressListEndpoints["default"])(_app["default"]));
  console.debug("http://localhost:".concat(_app["default"].get("port"), " is ready"));
}