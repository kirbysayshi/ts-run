# ts-run

Execute TypeScript using babel-register and zero-config. Uses [preset-env](https://babeljs.io/docs/en/babel-preset-env) to target the currently running version of node, so you don't need to worry about feature support either!

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

# License

MIT
