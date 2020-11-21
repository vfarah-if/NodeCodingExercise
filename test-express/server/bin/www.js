
import app from '../app';
import debugLib from 'debug';
import { createServer } from 'http';

const debug = debugLib('test-express:server');
const port = getPortAndConfigureIISExpress();
const server = generateServer();

function generateServer() {
  const result = createServer(app);
  result.listen(port);
  result.on('error', onError);
  result.on('listening', onListening);
  return result;
}

function getPortAndConfigureIISExpress() {
  var port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);
  return port;
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

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  makeErrorsMoreInformative();

  function makeErrorsMoreInformative() {
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
