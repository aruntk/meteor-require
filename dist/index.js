'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meteorRequire = undefined;

var _meteorRequire = require('./meteor-require');

var meteorRequire = exports.meteorRequire = function meteorRequire(packageName) {
  return (0, _meteorRequire.MeteorRequire)(Package, packageName);
};