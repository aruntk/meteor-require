module.exports = {
  "extends": "airbnb",
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "sourceType": "module"
  },
  "globals": {
    "$": true,
    "console": true,
    "_": true,
    "module": true,
    "require": true,
    "Meteor": true,
    "Package": true,
    "Tracker": true,
    "document": true,
    "describe": true,
    "it": true,
  },
  "rules": {
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "no-underscore-dangle": [2, { "allowAfterThis": true }],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error"
    ]
  }
};
