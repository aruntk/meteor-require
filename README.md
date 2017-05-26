# Meteor Require
import meteor packages inside npm packages.
```js
// inside your npm package
import { meteorRequire } from 'meteor-require';

const myMeteorPackage = meteorRequire('my:meteor-package');

```
