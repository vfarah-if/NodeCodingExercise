"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _path = require("path");

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("./swagger.json"));

var _index = _interopRequireDefault(require("./routes/index"));

var _users = _interopRequireDefault(require("./routes/users"));

var _config = _interopRequireDefault(require("./config"));

var isDev = _config["default"].isDev,
    port = _config["default"].port;
console.debug("This is a ".concat(isDev ? "Development" : "Production", " release preparing API on port '").concat(port, "'"));
var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use((0, _express.json)());
app.use((0, _express.urlencoded)({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"]((0, _path.join)(__dirname, "../public")));
app.use("/", _index["default"]);
app.use("/users", _users["default"]);
app.use("/api-docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
var _default = app;
exports["default"] = _default;