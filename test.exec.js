const { spawnSync, spawn } = require('child_process');
const assert = require('assert');

assert.strictEqual(
  spawnSync(`node -r ./index.js -e 'process.exit(0)'`, { shell: true }).status,
  0,
);

assert.strictEqual(
  spawnSync(`node -r ./index.js -e 'process.exit(2)'`, { shell: true }).status,
  2,
);
