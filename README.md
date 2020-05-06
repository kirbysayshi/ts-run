# ts-run

Execute TypeScript using babel-register and zero-config. Uses [preset-env](https://babeljs.io/docs/en/babel-preset-env) to target the currently running version of node, so you don't need to worry about feature support either!

Keep in mind that Babel does not check types, it simply strips them out and transpiles.

This package is targeted towards writing either one-off scripts, or tooling scripts for another project.

# Usage

```
$ npx @kirbysayshi/ts-run a-typescript-file.ts
```

If installed locally, the binary will be `ts-run`, so it can be simply run in an npm script with:

```
"the-script": "ts-run a-typescript-file.ts"
```

or in the folder via:

```
$ npx ts-run
```

To get typechecking in your editor, ensure there is a reasonable `tsconfig.json` file near the files you intend to run, and that the `include` setting matches those files.

## babelrc

There are some cases where you may wish to use local babelrc file resolution, which [Babel normally does](https://babeljs.io/docs/en/options#babelrc). ts-run, by default, disables this behavior to avoid surprises. To re-enable, use the `TS_RUN_BABELRC` env variable:

```
$ TS_RUN_BABELRC=true npx ts-run
```

# License

MIT
