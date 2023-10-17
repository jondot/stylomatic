# stylomatic [![npm version](https://img.shields.io/npm/v/stylomatic?style=flat)](https://npmjs.com/package/stylomatic)

<img src="media/stylomatic.png" width="363" align="right">

> Styles, configs, and tools for modern Typescript with zero configuration

* :lipstick: Core styles based on [@antfu/config](https://github.com/antfu/eslint-config) covering Typescript, React, best practices, and even `package.json` ordering and formatting, and more.
* :high_brightness: formatting is almost similar to Prettier, without the added burden of it on eslint
* :computer: Typescript config for various usecases
* :hammer: Tools: `esno`, `tsup` and intergrations `ts-jest`, and more.



# Usage

Bootstrap quickly:

```
pnpm i -D stylomatic eslint prettier @vercel/style-guide@5.0.2-canary.1 eslint-plugin-tailwindcss
```

```
pnpm stylomatic init
```

Will give you a starter `.eslintrc.js`, `.prettierrc.js` and `tsconfig.json`.

> note: because of package hoisting, we're installing all top-level deps. Stylomatic used to group all dependencies but today, stylomatic has been reduced to install just for `tsconfig` assets and the installer bin.

# Tooling deps

Starting v0.5.0, moved to here, instead of installed by default to be more compatible with how different package managers handle bins. Put these in root of your monorepo if needed:

```json
    "@types/supertest": "^2.0.14",
    "supertest": "^6.3.3"
    "jest": "^28.1.1",
    "ts-jest": "^29.0.3",
    "tsup": "^6.1.0",
    "typescript-cp": "^0.1.5",
    "typescript": "^4.7.3",
    "concurrently": "^7.2.1",
    "rimraf": "^3.0.2",
    "tsc-alias": "^1.6.9"
```

