### Creating the project

```sh
~/onGit/flux-tryouts (master)
$ mkdir hello-world

$ cd hello-world/

$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (hello-world)
version: (1.0.0)
description: A Hello World Flux app
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\droid\onGit\flux-tryouts\hello-world\package.json:

{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "A Hello World Flux app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) yes

```

**Install Flux**

```sh
$ npm install --save-dev flux
npm WARN package.json hello-world@1.0.0 No repository field.
npm WARN package.json hello-world@1.0.0 No README data
flux@2.1.1 node_modules\flux
├── immutable@3.8.1
├── fbjs@0.1.0-alpha.7 (whatwg-fetch@0.9.0, promise@7.1.1, core-js@1.2.7)
└── fbemitter@2.1.1 (fbjs@0.8.4)
```

**Install Babel**

```sh
$ npm install --save-dev babel-core babel-loader babel-preset-es2015
npm WARN package.json hello-world@1.0.0 No repository field.
npm WARN package.json hello-world@1.0.0 No README data
babel-loader@6.2.5 node_modules\babel-loader
├── object-assign@4.1.0
├── loader-utils@0.2.15 (big.js@3.1.3, emojis-list@2.0.1, json5@0.5.0)
└── mkdirp@0.5.1 (minimist@0.0.8)

babel-core@6.14.0 node_modules\babel-core
├── slash@1.0.0
├── babel-messages@6.8.0
├── shebang-regex@1.0.0
├── babel-template@6.15.0
├── path-exists@1.0.0
├── path-is-absolute@1.0.0
├── babel-helpers@6.8.0
├── private@0.1.6
├── convert-source-map@1.3.0
├── debug@2.2.0 (ms@0.7.1)
├── source-map@0.5.6
├── babylon@6.9.1
├── babel-types@6.15.0 (to-fast-properties@1.0.2, esutils@2.0.2)
├── minimatch@3.0.3 (brace-expansion@1.1.6)
├── babel-code-frame@6.11.0 (js-tokens@2.0.0, esutils@2.0.2, chalk@1.1.3)
├── babel-traverse@6.15.0 (globals@8.18.0, invariant@2.2.1)
├── babel-generator@6.14.0 (detect-indent@3.0.1)
├── json5@0.4.0
├── lodash@4.15.0
├── babel-register@6.14.0 (home-or-tmp@1.0.0, mkdirp@0.5.1, source-map-support@0.2.10, core-js@2.4.1)
└── babel-runtime@6.11.6 (regenerator-runtime@0.9.5, core-js@2.4.1)

babel-preset-es2015@6.14.0 node_modules\babel-preset-es2015
├── babel-plugin-transform-es2015-typeof-symbol@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-destructuring@6.9.0 (babel-runtime@6.11.6)
├── babel-plugin-check-es2015-constants@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-arrow-functions@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-modules-commonjs@6.14.0 (babel-plugin-transform-strict-mode@6.11.3, babel-template@6.15.0, babel-types@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-literals@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-block-scoped-functions@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-template-literals@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-modules-amd@6.8.0 (babel-template@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-object-super@6.8.0 (babel-helper-replace-supers@6.14.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-spread@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-sticky-regex@6.8.0 (babel-helper-regex@6.9.0, babel-types@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-for-of@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-function-name@6.9.0 (babel-types@6.15.0, babel-helper-function-name@6.8.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-modules-systemjs@6.14.0 (babel-template@6.15.0, babel-helper-hoist-variables@6.8.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-duplicate-keys@6.8.0 (babel-types@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-shorthand-properties@6.8.0 (babel-types@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-block-scoping@6.15.0 (babel-types@6.15.0, babel-template@6.15.0, babel-traverse@6.15.0, lodash@4.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-parameters@6.11.4 (babel-helper-get-function-arity@6.8.0, babel-helper-call-delegate@6.8.0, babel-template@6.15.0, babel-types@6.15.0, babel-traverse@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-modules-umd@6.12.0 (babel-template@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-unicode-regex@6.11.0 (regexpu-core@2.0.0, babel-helper-regex@6.9.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-computed-properties@6.8.0 (babel-helper-define-map@6.9.0, babel-template@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-classes@6.14.0 (babel-helper-replace-supers@6.14.0, babel-helper-optimise-call-expression@6.8.0, babel-messages@6.8.0, babel-helper-function-name@6.8.0, babel-helper-define-map@6.9.0, babel-template@6.15.0, babel-types@6.15.0, babel-traverse@6.15.0, babel-runtime@6.11.6)
└── babel-plugin-transform-regenerator@6.14.0 (babel-plugin-syntax-async-functions@6.13.0, private@0.1.6, babylon@6.9.1, babel-types@6.15.0, babel-traverse@6.15.0, babel-runtime@6.11.6)
```

*hello-world/package.json*

```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "A Hello World Flux app",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.14.0",
    "babel-loader": "^6.2.5",
    "babel-preset-es2015": "^6.14.0",
    "flux": "^2.1.1"
  }
}
```
