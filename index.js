const path = require('path');
require('@babel/register')({
  extensions: ['.ts', '.tsx', '.es6', '.es', '.jsx', '.js', '.mjs'],
  extends: path.join(__dirname, '.babelrc'),

  // Must specify custom ignore to prevent babel from ignoring everything outside CWD by default.
  // https://github.com/babel/babel/issues/8321#issuecomment-464932499
  ignore: [/node_modules/],

  // Prior to v4, ts-run would look up local babelrc files by default, as a
  // feature. This was problematic when dealing with create-react-app's
  // react-app preset, which THROWS if NODE_ENV is unset.
  babelrc: !!process.env.TS_RUN_BABELRC,
  // We _probably_ don't want to use the local babel config file, since that is
  // usually geared towards a browser target.
  configFile: process.env.TS_RUN_CONFIGFILE
    ? process.env.TS_RUN_CONFIGFILE
    : false,
});
