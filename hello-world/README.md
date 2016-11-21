### Setting up the project

```sh
~/onGit/Flux-Tryouts$ mkdir hello-world

~/onGit/Flux-Tryouts$ cd hello-world/

~/onGit/Flux-Tryouts/hello-world$ npm init

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
About to write to /home/droid/onGit/Flux-Tryouts/hello-world/package.json:

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
~/onGit/Flux-Tryouts/hello-world$ npm install --save-dev flux
npm WARN package.json hello-world@1.0.0 No repository field.
npm WARN package.json hello-world@1.0.0 No README data
flux@2.1.1 node_modules/flux
├── immutable@3.8.1
├── fbjs@0.1.0-alpha.7 (whatwg-fetch@0.9.0, promise@7.1.1, core-js@1.2.7)
└── fbemitter@2.1.1 (fbjs@0.8.4)
```

**Install Babel**

```sh
~/onGit/Flux-Tryouts/hello-world$ npm install --save-dev flux
npm WARN package.json hello-world@1.0.0 No repository field.
npm WARN package.json hello-world@1.0.0 No README data
flux@2.1.1 node_modules/flux
├── immutable@3.8.1
├── fbjs@0.1.0-alpha.7 (whatwg-fetch@0.9.0, promise@7.1.1, core-js@1.2.7)
└── fbemitter@2.1.1 (fbjs@0.8.4)
droid@droidserver:~/onGit/Flux-Tryouts/hello-world$ npm install --save-dev babel-core babel-loader babel-preset-es2015
npm WARN package.json hello-world@1.0.0 No repository field.
npm WARN package.json hello-world@1.0.0 No README data
npm WARN peerDependencies The peer dependency webpack@1 || ^2.1.0-beta included from babel-loader will no
npm WARN peerDependencies longer be automatically installed to fulfill the peerDependency 
npm WARN peerDependencies in npm 3+. Your application will need to depend on it explicitly.
npm WARN optional dep failed, continuing fsevents@1.0.14
webpack@1.13.2 node_modules/webpack
├── interpret@0.6.6
├── tapable@0.1.10
├── clone@1.0.2
├── async@1.5.2
├── supports-color@3.1.2 (has-flag@1.0.0)
├── loader-utils@0.2.15 (object-assign@4.1.0, big.js@3.1.3, emojis-list@2.0.1, json5@0.5.0)
├── enhanced-resolve@0.9.1 (graceful-fs@4.1.6, memory-fs@0.2.0)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── acorn@3.3.0
├── optimist@0.6.1 (wordwrap@0.0.3, minimist@0.0.10)
├── memory-fs@0.3.0 (errno@0.1.4, readable-stream@2.1.5)
├── webpack-core@0.6.8 (source-map@0.4.4, source-list-map@0.1.6)
├── uglify-js@2.6.4 (async@0.2.10, uglify-to-browserify@1.0.2, source-map@0.5.6, yargs@3.10.0)
├── watchpack@0.2.9 (graceful-fs@4.1.6, async@0.9.2, chokidar@1.6.0)
└── node-libs-browser@0.6.0 (https-browserify@0.0.0, tty-browserify@0.0.0, path-browserify@0.0.0, constants-browserify@0.0.1, punycode@1.4.1, string_decoder@0.10.31, os-browserify@0.1.2, process@0.11.9, assert@1.4.1, domain-browser@1.1.7, querystring-es3@0.2.1, timers-browserify@1.4.2, events@1.1.1, stream-browserify@1.0.0, vm-browserify@0.0.4, console-browserify@1.1.0, util@0.10.3, readable-stream@1.1.14, url@0.10.3, http-browserify@1.7.0, browserify-zlib@0.1.4, buffer@4.9.1, crypto-browserify@3.2.8)

babel-loader@6.2.5 node_modules/babel-loader
├── object-assign@4.1.0
├── loader-utils@0.2.15 (big.js@3.1.3, emojis-list@2.0.1, json5@0.5.0)
└── mkdirp@0.5.1 (minimist@0.0.8)

babel-core@6.14.0 node_modules/babel-core
├── slash@1.0.0
├── babel-messages@6.8.0
├── babel-template@6.15.0
├── path-exists@1.0.0
├── path-is-absolute@1.0.0
├── shebang-regex@1.0.0
├── babel-helpers@6.8.0
├── private@0.1.6
├── convert-source-map@1.3.0
├── source-map@0.5.6
├── debug@2.2.0 (ms@0.7.1)
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

babel-preset-es2015@6.14.0 node_modules/babel-preset-es2015
├── babel-plugin-transform-es2015-computed-properties@6.8.0 (babel-helper-define-map@6.9.0, babel-template@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-spread@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-parameters@6.11.4 (babel-helper-get-function-arity@6.8.0, babel-helper-call-delegate@6.8.0, babel-template@6.15.0, babel-types@6.15.0, babel-traverse@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-block-scoped-functions@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-object-super@6.8.0 (babel-helper-replace-supers@6.14.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-block-scoping@6.15.0 (babel-types@6.15.0, babel-template@6.15.0, babel-traverse@6.15.0, lodash@4.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-modules-commonjs@6.14.0 (babel-plugin-transform-strict-mode@6.11.3, babel-template@6.15.0, babel-types@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-template-literals@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-modules-umd@6.12.0 (babel-template@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-shorthand-properties@6.8.0 (babel-types@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-sticky-regex@6.8.0 (babel-helper-regex@6.9.0, babel-types@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-literals@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-destructuring@6.9.0 (babel-runtime@6.11.6)
├── babel-plugin-check-es2015-constants@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-modules-systemjs@6.14.0 (babel-template@6.15.0, babel-helper-hoist-variables@6.8.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-typeof-symbol@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-modules-amd@6.8.0 (babel-template@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-arrow-functions@6.8.0 (babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-function-name@6.9.0 (babel-types@6.15.0, babel-helper-function-name@6.8.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-duplicate-keys@6.8.0 (babel-types@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-classes@6.14.0 (babel-helper-replace-supers@6.14.0, babel-messages@6.8.0, babel-helper-optimise-call-expression@6.8.0, babel-helper-function-name@6.8.0, babel-helper-define-map@6.9.0, babel-template@6.15.0, babel-types@6.15.0, babel-traverse@6.15.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-unicode-regex@6.11.0 (regexpu-core@2.0.0, babel-helper-regex@6.9.0, babel-runtime@6.11.6)
├── babel-plugin-transform-es2015-for-of@6.8.0 (babel-runtime@6.11.6)
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
    "flux": "^2.1.1",
    "webpack": "^1.13.2"
  }
}
```

### Writing Code

*main.js*

```js
// Import Dispatcher from the flux module
import {Dispatcher} from 'flux';

// Create a new dispatcher instance
const dispatcher = new Dispatcher();

// Register a callback function that is invoked everytime an action is dispatched
dispatcher.register((action) => {
  var pElement;

  // Determine how to respond to the action based on its "name" property as defined below
  switch(action.name) {
    case 'greet':
      pElement = document.createElement('p');
      pElement.textContent = action.payload;
      document.body.appendChild(pElement);
      break;
    case 'say':
      pElement = document.createElement('p');
      pElement.textContent = `${action.payload}`;
      pElement.style.fontWeight = 'italic';
      document.body.appendChild(pElement);
      break;
    case 'tell':
      pElement = document.createElement('p');
      pElement.textContent = action.payload;
      pElement.style.fontWeight = 'bold';
      document.body.appendChild(pElement);
      break;
    default:
      break;
  }
});

// dispatch few actions using the Dispatcher instance 

// dispatch an action named "greet" with the payload "Hello World!"
dispatcher.dispatch({
  name: 'greet',
  payload: 'Hello World!'
});

dispatcher.dispatch({
  name: 'say',
  payload: 'Hello Earth!'
});

dispatcher.dispatch({
  name: 'tell',
  payload: 'Hello Solar System!'
});
```

*webpack.config.js*

```js
module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'main-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: 'es2015'
        }
      }
    ]
  }
}
```

*index.html*

```html
<!doctype html>
<html>
  <head>
    <title>Hello World!</title>
    <script src="main-bundle.js" defer></script>  ----- 1
  </head>
  <body>
  </body>
</html>
```

1] Refer to the script that would be generated using *webpack*

![](_misc/Project%20Contents.png)

### Building Code

```sh
~/onGit/Flux-Tryouts/hello-world$ webpack
Hash: ff1b4937f0d4ede98f72
Version: webpack 1.13.2
Time: 35894ms
         Asset     Size  Chunks             Chunk Names
main-bundle.js  17.5 kB       0  [emitted]  main
    + 5 hidden modules
```

![](_misc/Project%20Contents%20-%20After%20running%20webpack.png)

### Launching in browser

Open "index.html" in a browser

![](_misc/browser%20screenshot.png)

