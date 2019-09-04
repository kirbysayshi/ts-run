// Note: this file is named an obvious `ts-run-bootstrap` so that if an error
// occurs when finding it or executing it, it is obvious to the user that the
// error was within ts-run and not their script.

const path = require('path');
require('@babel/register')({
  extensions: ['.ts', '.tsx', '.es6', '.es', '.jsx', '.js', '.mjs'],
  extends: path.join(__dirname, '.babelrc'),
  // Must specify custom ignore to prevent babel from ignoring everything outside CWD by default.
  // https://github.com/babel/babel/issues/8321#issuecomment-464932499
  ignore: [/node_modules/],
});
