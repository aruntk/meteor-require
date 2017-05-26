'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _meteorRequire = require('../meteor-require');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('package-name', function () {
  it('basic test', function () {
    var packageName = 'my:package';
    var Package = {};
    Package[packageName] = { myPackage: 'passed' };
    _assert2.default.equal((0, _meteorRequire.MeteorRequire)(Package, packageName).myPackage, 'passed');
  });
});