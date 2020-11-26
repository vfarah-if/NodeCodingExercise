"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserList = void 0;

var getUserList = function getUserList() {
  return [{
    user: {
      id: 1,
      name: 'Jane',
      lastname: 'Doe'
    }
  }, {
    user: {
      id: 2,
      name: 'Jon',
      lastname: 'Doe'
    }
  }, {
    user: {
      id: 3,
      name: 'Michael',
      lastname: 'Caine'
    }
  }, {
    user: {
      id: 4,
      name: 'James',
      lastname: 'Bond'
    }
  }, {
    user: {
      id: 5,
      name: 'Robert',
      lastname: 'Plant'
    }
  }, {
    user: {
      id: 6,
      name: 'Jordan',
      lastname: 'Peterson'
    }
  }];
};

exports.getUserList = getUserList;