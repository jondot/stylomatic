# stylomatic [![npm version](https://img.shields.io/npm/v/stylomatic?style=flat)](https://npmjs.com/package/stylomatic)

<img src="media/stylomatic.png" width="363" align="right">

> Styles, configs, and tools for modern Typescript with zero configuration

* :lipstick: Core styles based on [@antfu/config](https://github.com/antfu/eslint-config) covering Typescript, React, best practices, and even `package.json` ordering and formatting, and more.
* :high_brightness: [prettier](https://github.com/prettier/prettier-eslint) for consistent formatting for all
* :computer: Typescript config for various usecases
* :hammer: Tools: `esno`, `tsup` and intergrations `ts-jest`, and more.


# Install

```
yarn add --dev stylomatic
```

# Usage

Bootstrap quickly:

```
yarn stylomatic
```

Will give you a starter `.eslint.js` and `tsconfig.json`.

# Tooling deps

Starting v0.5.0, moved to here, instead of installed by default to be more compatible with how different package managers handle bins. Put these in root of your monorepo if needed:

```json
    "jest": "^28.1.1",
    "ts-jest": "^29.0.3",
    "tsup": "^6.1.0",
    "typescript-cp": "^0.1.5",
    "typescript": "^4.7.3",
    "concurrently": "^7.2.1",
    "rimraf": "^3.0.2",
    "tsc-alias": "^1.6.9"
```


# Quick start

```
$ mkdir myproject && cd myproject
$ yarn init -y && yarn add --dev stylomatic

$ yarn stylomatic
added .eslint.js
added tsconfig.json

$ mkdir src
$ cat > src/index.ts
console.log("hello unstyled world");

$ yarn eslint src/index.ts

src/index.ts
  1:1   error  Unexpected console statement                                       no-console
  1:13  error  Replace `"hello·unstyled·world");` with `'hello·unstyled·world')`  prettier/prettier

✖ 2 problems (2 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

# Recommended config

In your `.eslint.js`:

```js
module.exports = require('stylomatic/eslint-preset')
```

And in your `tsconfig.json`:

```json
{
  "extends": "stylomatic/node-library.json",
  "compilerOptions": {
    "outDir": "dist",
    "strict": false,
    "isolatedModules": false
  },
  "include": [
    "./src",
    "./test"
  ],
  "exclude": [
    "**/__tests__/",
    "test/fixtures"
  ]
}
```
