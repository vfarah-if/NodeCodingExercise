"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _users = require("../users");

var router = (0, _express.Router)();
router.get('/', function (req, res, next) {
  // console.debug(req, next);
  var usersResponse = (0, _users.getUserList)();
  res.json(usersResponse);
});
var _default = router;
exports["default"] = _default;