'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MeteorRequire = exports.MeteorRequire = function MeteorRequire(Package, packageName) {
  if (!Package) {
    throw new Error('This package is meant to be run inside a meteor app');
  } else if (!Package[packageName]) {
    throw new Error(packageName + ' is required. (add it with: \'meteor add ' + packageName + '\').');
  }
  return Package[packageName];
};