# Flux

### Basic Setup

**Install webpack**

Install the *webpack* npm module globally.

```sh
$ which npm
/c/Software/Nodejs/4.4.7/npm

$ npm install -g webpack
npm WARN optional dep failed, continuing fsevents@1.0.14
C:\Users\droid\AppData\Roaming\npm\webpack -> C:\Users\droid\AppData\Roaming\npm\node_modules\webpack\bin\webpack.js
webpack@1.13.2 C:\Users\droid\AppData\Roaming\npm\node_modules\webpack
├── interpret@0.6.6
├── tapable@0.1.10
├── clone@1.0.2
├── async@1.5.2
├── supports-color@3.1.2 (has-flag@1.0.0)
├── loader-utils@0.2.15 (object-assign@4.1.0, big.js@3.1.3, emojis-list@2.0.1, json5@0.5.0)
├── enhanced-resolve@0.9.1 (graceful-fs@4.1.6, memory-fs@0.2.0)
├── mkdirp@0.5.1 (minimist@0.0.8)
├── optimist@0.6.1 (wordwrap@0.0.3, minimist@0.0.10)
├── acorn@3.3.0
├── memory-fs@0.3.0 (errno@0.1.4, readable-stream@2.1.5)
├── webpack-core@0.6.8 (source-map@0.4.4, source-list-map@0.1.6)
├── uglify-js@2.6.4 (async@0.2.10, uglify-to-browserify@1.0.2, source-map@0.5.6, yargs@3.10.0)
├── watchpack@0.2.9 (graceful-fs@4.1.6, async@0.9.2, chokidar@1.6.0)
└── node-libs-browser@0.6.0 (https-browserify@0.0.0, tty-browserify@0.0.0, punycode@1.4.1, constants-browserify@0.0.1, string_decoder@0.10.31, os-browserify@0.1.2, path-browserify@0.0.0, assert@1.4.1, domain-browser@1.1.7, process@0.11.9, querystring-es3@0.2.1, timers-browserify@1.4.2, stream-browserify@1.0.0, events@1.1.1, vm-browserify@0.0.4, console-browserify@1.1.0, util@0.10.3, readable-stream@1.1.14, url@0.10.3, http-browserify@1.7.0, browserify-zlib@0.1.4, buffer@4.9.1, crypto-browserify@3.2.8)

```

**Ubuntu**

```sh
droid@droidserver:~$ uname -a
Linux droidserver 4.4.0-42-generic #62~14.04.1-Ubuntu SMP Fri Oct 7 23:15:48 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux
droid@droidserver:~$ uname -r
4.4.0-42-generic
```

```sh
droid@droidserver:~$ npm install webpack -g
/home/droid/software/node/node-v6.9.1-linux-x64/bin/webpack -> /home/droid/software/node/node-v6.9.1-linux-x64/lib/node_modules/webpack/bin/webpack.js
/home/droid/software/node/node-v6.9.1-linux-x64/lib
└─┬ webpack@1.13.3 
  ├── acorn@3.3.0 
  ├── async@1.5.2 
  ├── clone@1.0.2 
  ├─┬ enhanced-resolve@0.9.1 
  │ ├── graceful-fs@4.1.10 
  │ └── memory-fs@0.2.0 
  ├── interpret@0.6.6 
  ├─┬ loader-utils@0.2.16 
  │ ├── big.js@3.1.3 
  │ ├── emojis-list@2.1.0 
  │ ├── json5@0.5.0 
  │ └── object-assign@4.1.0 
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
  ├─┬ mkdirp@0.5.1 
  │ └── minimist@0.0.8 
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
  │ ├── source-map@0.5.6 
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
  │   ├── path-is-absolute@1.0.1 
  │   └─┬ readdirp@2.1.0 
  │     ├─┬ minimatch@3.0.3 
  │     │ └─┬ brace-expansion@1.1.6 
  │     │   ├── balanced-match@0.4.2 
  │     │   └── concat-map@0.0.1 
  │     └── set-immediate-shim@1.0.1 
  └─┬ webpack-core@0.6.8 
    ├── source-list-map@0.1.6 
    └─┬ source-map@0.4.4 
      └── amdefine@1.0.1 

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules/webpack/node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.15: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})
```

```sh
droid@droidserver:~$ which webpack
/home/droid/software/node/node-v6.9.1-linux-x64/bin/webpack
```

This makes the *webpack* command available for building code. 
