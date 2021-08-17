# ts-run

Execute TypeScript using babel-register and zero-config. Uses [preset-env](https://babeljs.io/docs/en/babel-preset-env) to target the currently running version of node, so you don't need to worry about feature support either!

Keep in mind that Babel does not check types, it simply strips them out and transpiles.

This package is targeted towards writing either one-off scripts, or tooling scripts for another project.

# Usage

```sh
npm install @kirbysayshi/ts-run
# or
yarn add @kirbysayshi/ts-run
```

Then use node's `-r` flag:

```sh
node -r @kirbysayshi/ts-run ./a-typescript-file.ts
```

Within an npm / package.json script:

```
"the-script": "node -r @kirbysayshi/ts-run a-typescript-file.ts"
```

To get typechecking in your editor, ensure there is a reasonable `tsconfig.json` file near the files you intend to run, and that the `include` setting matches those files.

## babelrc / babel.config.js

There are some cases where you may wish to use local babelrc or babel.config.js file resolution, which [Babel normally does](https://babeljs.io/docs/en/options#babelrc). ts-run, by default, disables this behavior to avoid surprises. To re-enable, use the `TS_RUN_BABELRC` env variable (for babelrc) or `TS_RUN_CONFIGFILE` (for babel.config.js):

```sh
$ TS_RUN_BABELRC=true node -r @kirbysayshi/ts-run ./a-typescript-file.ts
```

```sh
$ TS_RUN_CONFIGFILE=${PWD}/babel.config.js node -r @kirbysayshi/ts-run ./a-typescript-file.ts
```

# Changelog / Addendum

Previous versions of this utility provided an "npm binary" in the form of `ts-run`. After many struggles trying to get POSIX signals propagating (as well as Yarn 2+ Plug'N'Play support), I decided it was easier to completely avoid the problem by using node directly.

# License

MIT
