### Getting the Starter files

Copy the following files from the "hello-world" sample in the "Flux" repository.

* index.html
* webpack.config.js
* package.json

*package.json*

```json
{
  "name": "basic-store",
  "version": "1.0.0",
  "description": "A Flux app with a basic store",
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

### Install Dependencies

```sh
droid@droidserver:~/onGit/Flux-Tryouts/basic-store$ npm install
basic-store@1.0.0 /home/droid/onGit/Scratchpad/Flux/BasicStore
├─┬ babel-core@6.18.2 
│ ├─┬ babel-code-frame@6.16.0 
│ │ ├─┬ chalk@1.1.3 
│ │ │ ├── ansi-styles@2.2.1 
│ │ │ ├── escape-string-regexp@1.0.5 
│ │ │ ├─┬ has-ansi@2.0.0 
│ │ │ │ └── ansi-regex@2.0.0 
│ │ │ ├── strip-ansi@3.0.1 
│ │ │ └── supports-color@2.0.0 
│ │ ├── esutils@2.0.2 
│ │ └── js-tokens@2.0.0 
│ ├─┬ babel-generator@6.19.0 
│ │ ├─┬ detect-indent@4.0.0 
│ │ │ └─┬ repeating@2.0.1 
│ │ │   └─┬ is-finite@1.0.2 
│ │ │     └── number-is-nan@1.0.1 
│ │ └── jsesc@1.3.0 
│ ├── babel-helpers@6.16.0 
│ ├── babel-messages@6.8.0 
│ ├─┬ babel-register@6.18.0 
│ │ ├── core-js@2.4.1 
│ │ ├─┬ home-or-tmp@2.0.0 
│ │ │ ├── os-homedir@1.0.2 
│ │ │ └── os-tmpdir@1.0.2 
│ │ └── source-map-support@0.4.6 
│ ├─┬ babel-runtime@6.18.0 
│ │ └── regenerator-runtime@0.9.6 
│ ├── babel-template@6.16.0 
│ ├─┬ babel-traverse@6.19.0 
│ │ ├── globals@9.14.0 
│ │ └─┬ invariant@2.2.2 
│ │   └── loose-envify@1.3.0 
│ ├─┬ babel-types@6.19.0 
│ │ └── to-fast-properties@1.0.2 
│ ├── babylon@6.14.1 
│ ├── convert-source-map@1.3.0 
│ ├─┬ debug@2.3.3 
│ │ └── ms@0.7.2 
│ ├── json5@0.5.0 
│ ├── lodash@4.17.2 
│ ├─┬ minimatch@3.0.3 
│ │ └─┬ brace-expansion@1.1.6 
│ │   ├── balanced-match@0.4.2 
│ │   └── concat-map@0.0.1 
│ ├── path-is-absolute@1.0.1 
│ ├── private@0.1.6 
│ ├── slash@1.0.0 
│ └── source-map@0.5.6 
├─┬ babel-loader@6.2.8 
│ ├─┬ find-cache-dir@0.1.1 
│ │ ├── commondir@1.0.1 
│ │ └─┬ pkg-dir@1.0.0 
│ │   └─┬ find-up@1.1.2 
│ │     ├── path-exists@2.1.0 
│ │     └─┬ pinkie-promise@2.0.1 
│ │       └── pinkie@2.0.4 
│ ├─┬ loader-utils@0.2.16 
│ │ ├── big.js@3.1.3 
│ │ └── emojis-list@2.1.0 
│ ├─┬ mkdirp@0.5.1 
│ │ └── minimist@0.0.8 
│ └── object-assign@4.1.0 
├─┬ babel-preset-es2015@6.18.0 
│ ├── babel-plugin-check-es2015-constants@6.8.0 
│ ├── babel-plugin-transform-es2015-arrow-functions@6.8.0 
│ ├── babel-plugin-transform-es2015-block-scoped-functions@6.8.0 
│ ├── babel-plugin-transform-es2015-block-scoping@6.18.0 
│ ├─┬ babel-plugin-transform-es2015-classes@6.18.0 
│ │ ├── babel-helper-define-map@6.18.0 
│ │ ├── babel-helper-function-name@6.18.0 
│ │ ├── babel-helper-optimise-call-expression@6.18.0 
│ │ └── babel-helper-replace-supers@6.18.0 
│ ├── babel-plugin-transform-es2015-computed-properties@6.8.0 
│ ├── babel-plugin-transform-es2015-destructuring@6.19.0 
│ ├── babel-plugin-transform-es2015-duplicate-keys@6.8.0 
│ ├── babel-plugin-transform-es2015-for-of@6.18.0 
│ ├── babel-plugin-transform-es2015-function-name@6.9.0 
│ ├── babel-plugin-transform-es2015-literals@6.8.0 
│ ├── babel-plugin-transform-es2015-modules-amd@6.18.0 
│ ├─┬ babel-plugin-transform-es2015-modules-commonjs@6.18.0 
│ │ └── babel-plugin-transform-strict-mode@6.18.0 
│ ├─┬ babel-plugin-transform-es2015-modules-systemjs@6.19.0 
│ │ └── babel-helper-hoist-variables@6.18.0 
│ ├── babel-plugin-transform-es2015-modules-umd@6.18.0 
│ ├── babel-plugin-transform-es2015-object-super@6.8.0 
│ ├─┬ babel-plugin-transform-es2015-parameters@6.18.0 
│ │ ├── babel-helper-call-delegate@6.18.0 
│ │ └── babel-helper-get-function-arity@6.18.0 
│ ├── babel-plugin-transform-es2015-shorthand-properties@6.18.0 
│ ├── babel-plugin-transform-es2015-spread@6.8.0 
│ ├─┬ babel-plugin-transform-es2015-sticky-regex@6.8.0 
│ │ └── babel-helper-regex@6.18.0 
│ ├── babel-plugin-transform-es2015-template-literals@6.8.0 
│ ├── babel-plugin-transform-es2015-typeof-symbol@6.18.0 
│ ├─┬ babel-plugin-transform-es2015-unicode-regex@6.11.0 
│ │ └─┬ regexpu-core@2.0.0 
│ │   ├── regenerate@1.3.2 
│ │   ├── regjsgen@0.2.0 
│ │   └─┬ regjsparser@0.1.5 
│ │     └── jsesc@0.5.0 
│ └── babel-plugin-transform-regenerator@6.16.1 
├─┬ flux@2.1.1 
│ ├─┬ fbemitter@2.1.1 
│ │ └─┬ fbjs@0.8.6 
│ │   ├── core-js@1.2.7 
│ │   ├─┬ isomorphic-fetch@2.2.1 
│ │   │ ├─┬ node-fetch@1.6.3 
│ │   │ │ ├─┬ encoding@0.1.12 
│ │   │ │ │ └── iconv-lite@0.4.15 
│ │   │ │ └── is-stream@1.1.0 
│ │   │ └── whatwg-fetch@2.0.1 
│ │   └── ua-parser-js@0.7.12 
│ ├─┬ fbjs@0.1.0-alpha.7 
│ │ ├── core-js@1.2.7 
│ │ ├─┬ promise@7.1.1 
│ │ │ └── asap@2.0.5 
│ │ └── whatwg-fetch@0.9.0 
│ └── immutable@3.8.1 
└─┬ webpack@1.13.3 
  ├── acorn@3.3.0 
  ├── async@1.5.2 
  ├── clone@1.0.2 
  ├─┬ enhanced-resolve@0.9.1 
  │ ├── graceful-fs@4.1.11 
  │ └── memory-fs@0.2.0 
  ├── interpret@0.6.6 
  ├─┬ memory-fs@0.3.0 
  │ ├─┬ errno@0.1.4 
  │ │ └── prr@0.0.0 
  │ └─┬ readable-stream@2.2.2 
  │   ├── buffer-shims@1.0.0 
  │   ├── core-util-is@1.0.2 
  │   ├── inherits@2.0.3 
  │   ├── isarray@1.0.0 
  │   ├── process-nextick-args@1.0.7 
  │   └── util-deprecate@1.0.2 
  ├─┬ node-libs-browser@0.6.0 
  │ ├── assert@1.4.1 
  │ ├─┬ browserify-zlib@0.1.4 
  │ │ └── pako@0.2.9 
  │ ├─┬ buffer@4.9.1 
  │ │ ├── base64-js@1.2.0 
  │ │ └── ieee754@1.1.8 
  │ ├─┬ console-browserify@1.1.0 
  │ │ └── date-now@0.1.4 
  │ ├── constants-browserify@0.0.1 
  │ ├─┬ crypto-browserify@3.2.8 
  │ │ ├── pbkdf2-compat@2.0.1 
  │ │ ├── ripemd160@0.2.0 
  │ │ └── sha.js@2.2.6 
  │ ├── domain-browser@1.1.7 
  │ ├── events@1.1.1 
  │ ├─┬ http-browserify@1.7.0 
  │ │ └── Base64@0.2.1 
  │ ├── https-browserify@0.0.0 
  │ ├── os-browserify@0.1.2 
  │ ├── path-browserify@0.0.0 
  │ ├── process@0.11.9 
  │ ├── punycode@1.4.1 
  │ ├── querystring-es3@0.2.1 
  │ ├─┬ readable-stream@1.1.14 
  │ │ └── isarray@0.0.1 
  │ ├─┬ stream-browserify@1.0.0 
  │ │ └─┬ readable-stream@1.1.14 
  │ │   └── isarray@0.0.1 
  │ ├── string_decoder@0.10.31 
  │ ├── timers-browserify@1.4.2 
  │ ├── tty-browserify@0.0.0 
  │ ├─┬ url@0.10.3 
  │ │ ├── punycode@1.3.2 
  │ │ └── querystring@0.2.0 
  │ ├─┬ util@0.10.3 
  │ │ └── inherits@2.0.1 
  │ └─┬ vm-browserify@0.0.4 
  │   └── indexof@0.0.1 
  ├─┬ optimist@0.6.1 
  │ └── wordwrap@0.0.3 
  ├─┬ supports-color@3.1.2 
  │ └── has-flag@1.0.0 
  ├── tapable@0.1.10 
  ├─┬ uglify-js@2.7.4 
  │ ├── async@0.2.10 
  │ ├── uglify-to-browserify@1.0.2 
  │ └─┬ yargs@3.10.0 
  │   ├── camelcase@1.2.1 
  │   ├─┬ cliui@2.1.0 
  │   │ ├─┬ center-align@0.1.3 
  │   │ │ ├─┬ align-text@0.1.4 
  │   │ │ │ ├── longest@1.0.1 
  │   │ │ │ └── repeat-string@1.6.1 
  │   │ │ └── lazy-cache@1.0.4 
  │   │ ├── right-align@0.1.3 
  │   │ └── wordwrap@0.0.2 
  │   ├── decamelize@1.2.0 
  │   └── window-size@0.1.0 
  ├─┬ watchpack@0.2.9 
  │ ├── async@0.9.2 
  │ └─┬ chokidar@1.6.1 
  │   ├─┬ anymatch@1.3.0 
  │   │ ├── arrify@1.0.1 
  │   │ └─┬ micromatch@2.3.11 
  │   │   ├─┬ arr-diff@2.0.0 
  │   │   │ └── arr-flatten@1.0.1 
  │   │   ├── array-unique@0.2.1 
  │   │   ├─┬ braces@1.8.5 
  │   │   │ ├─┬ expand-range@1.8.2 
  │   │   │ │ └─┬ fill-range@2.2.3 
  │   │   │ │   ├── is-number@2.1.0 
  │   │   │ │   ├── isobject@2.1.0 
  │   │   │ │   └── randomatic@1.1.5 
  │   │   │ ├── preserve@0.2.0 
  │   │   │ └── repeat-element@1.1.2 
  │   │   ├─┬ expand-brackets@0.1.5 
  │   │   │ └── is-posix-bracket@0.1.1 
  │   │   ├── extglob@0.3.2 
  │   │   ├── filename-regex@2.0.0 
  │   │   ├─┬ kind-of@3.0.4 
  │   │   │ └── is-buffer@1.1.4 
  │   │   ├── normalize-path@2.0.1 
  │   │   ├─┬ object.omit@2.0.1 
  │   │   │ ├─┬ for-own@0.1.4 
  │   │   │ │ └── for-in@0.1.6 
  │   │   │ └── is-extendable@0.1.1 
  │   │   ├─┬ parse-glob@3.0.4 
  │   │   │ ├── glob-base@0.3.0 
  │   │   │ └── is-dotfile@1.0.2 
  │   │   └─┬ regex-cache@0.4.3 
  │   │     ├── is-equal-shallow@0.1.3 
  │   │     └── is-primitive@2.0.0 
  │   ├── async-each@1.0.1 
  │   ├── glob-parent@2.0.0 
  │   ├─┬ is-binary-path@1.0.1 
  │   │ └── binary-extensions@1.7.0 
  │   ├─┬ is-glob@2.0.1 
  │   │ └── is-extglob@1.0.0 
  │   └─┬ readdirp@2.1.0 
  │     └── set-immediate-shim@1.0.1 
  └─┬ webpack-core@0.6.8 
    ├── source-list-map@0.1.6 
    └─┬ source-map@0.4.4 
      └── amdefine@1.0.1 

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.15: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
npm WARN basic-store@1.0.0 No repository field.
```

### Setting up a Dispatcher

*dispatcher.js*

```js
'use strict';

import { Dispatcher } from 'flux';

export default new Dispatcher();
```

### Creating a basic store

*stores/homePage.js*

```js
import dispatcher from '../dispatcher';

class HomePageStore {
  constructor() {
    this.state = {
      user: '',
      headerEntries: [],
      pageContent: ''
    };

    dispatcher.register((e) => {
      switch(e.type) {
        case 'HOME_PAGE_LOADED':
          Object.assign(this.state, e.payload);
          break;
      }
    });
  }
}

export default new HomePageStore();
```

*main.js*

```js
import dispatcher from './dispatcher';
import homePageStore from './stores/homePage';

console.log(`user: "${homePageStore.state.user}"`);
console.log(`Header Entries: "${homePageStore.state.headerEntries}"`);
console.log(`Page Content: "${homePageStore.state.pageContent}"`);

dispatcher.dispatch({
  type: 'HOME_PAGE_LOADED',
  payload: {
    user: 'Einstein',
    headerEntries: [
      'Menu',
      'Courses',
      'Instructors',
      'About'
    ],
    pageContent: 'Welcome to the store'
  }
});

console.log(`user: "${homePageStore.state.user}"`);
console.log(`Header Entries: "${homePageStore.state.headerEntries}"`);
console.log(`Page Content: "${homePageStore.state.pageContent}"`);
```

### Contents of Starter files

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
    <title>Hello Basic Store!</title>
    <script src="main-bundle.js" defer></script>
  </head>
  <body>
  </body>
</html>
```

### Project Content

![](_misc/Project%20Content.png)


### Run Webpack

```sh
droid@droidserver:~/onGit/Flux-Tryouts/basic-store$ webpack
Hash: 7482b7a968a5bb411237
Version: webpack 1.13.3
Time: 870ms
         Asset     Size  Chunks             Chunk Names
main-bundle.js  18.9 kB       0  [emitted]  main
    + 7 hidden modules
```

### Project Content

![](_misc/Project%20Content%20-%20After%20running%20webpack.png)

### Output 

**Viewing index.html**

Open index.html and view the output in the console

![](_misc/Browser%20Snapshot.png)


### Using Events

*stores/homePage.js*

```js
import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';              <------ 1

class HomePageStore extends EventEmitter {          <------ 2
  constructor() {
    this.state = {
      user: '',
      headerEntries: [],
      pageContent: ''
    };

    dispatcher.register((e) => {
      switch(e.type) {
        case 'HOME_PAGE_LOADED':
          Object.assign(this.state, e.payload);
          this.emit('update', this.state);          <------ 3
          break;
      }
    });
  }
}

export default new HomePageStore();
```

*main.js*

```js
import dispatcher from './dispatcher';
import homePageStore from './stores/homePage';

console.log(`user: "${homePageStore.state.user}"`);
console.log(`Header Entries: "${homePageStore.state.headerEntries}"`);
console.log(`Page Content: "${homePageStore.state.pageContent}"`);

homePageStore.on('update', (state) => {                     <------- 1
  console.log('> user', state.user);                        <------- 2
  console.log('> Header Entries', state.headerEntries);
  console.log('> Page Content', state.pageContent);
});

dispatcher.dispatch({
  type: 'HOME_PAGE_LOADED',
  payload: {
    user: 'Einstein',
    headerEntries: [
      'Menu',
      'Courses',
      'Instructors',
      'About'
    ],
    pageContent: 'Welcome to the store'
  }
});

console.log(`user: "${homePageStore.state.user}"`);
console.log(`Header Entries: "${homePageStore.state.headerEntries}"`);
console.log(`Page Content: "${homePageStore.state.pageContent}"`);
```

```sh
droid@droidserver:~/onGit/Flux-Tryouts/basic-store$ webpack
Hash: aa3fd09d8bd88509ded6
Version: webpack 1.13.3
Time: 4814ms
         Asset     Size  Chunks             Chunk Names
main-bundle.js  18.3 kB       0  [emitted]  main
    + 7 hidden modules

ERROR in ./stores/homePage.js
Module build failed: SyntaxError: 'this' is not allowed before super()

  4 | class HomePageStore extends EventEmitter {
  5 |   constructor() {
> 6 |     this.state = {
    |     ^
  7 |       user: '',
  8 |       headerEntries: [],
  9 |       pageContent: ''

 @ ./main.js 7:16-44
```

*stores/homePage.js*

```js
import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

class HomePageStore extends EventEmitter {
  constructor() {
    super();                                        <------- 1

    this.state = {
      user: '',
      headerEntries: [],
      pageContent: ''
    };

    dispatcher.register((e) => {
      switch(e.type) {
        case 'HOME_PAGE_LOADED':
          Object.assign(this.state, e.payload);
          this.emit('update', this.state);
          break;
      }
    });
  }
}

export default new HomePageStore();
```

```sh
droid@droidserver:~/onGit/Flux-Tryouts/basic-store$ webpack
Hash: 6277c3cfdaea6a769b17
Version: webpack 1.13.3
Time: 916ms
         Asset     Size  Chunks             Chunk Names
main-bundle.js  28.9 kB       0  [emitted]  main
    + 8 hidden modules
```

![](_misc/Browser%20Screenshot%20-%20With%20the%20Store%20using%20an%20EventEmitter.png)
