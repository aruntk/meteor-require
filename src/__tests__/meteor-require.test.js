import assert from 'assert';
import { MeteorRequire } from '../meteor-require';

describe('package-name', () => {
  it('basic test', () => {
    const packageName = 'my:package';
    const Package = {};
    Package[packageName] = { myPackage: 'passed' };
    assert.equal(MeteorRequire(Package, packageName).myPackage, 'passed');
  });
});
