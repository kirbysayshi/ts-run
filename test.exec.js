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

{
  let exited = false;
  const proc = spawn(
    `node -r ./index.js -e '
      console.log("READY");
      process.on("SIGUSR2", () => {process.exit(2)});
      setInterval(() => {}, 1000)
    '`,
    { shell: true, stdio: 'pipe', env: process.env },
  );

  proc.stdout.pipe(process.stdout);
  proc.stderr.pipe(process.stderr);

  proc.stdout.on('data', data => {
    // Node <15 has no event for when the process is "ready". Without waiting a
    // bit, the actual code does not have a chance to run.
    if (data.toString().trim() !== 'READY') return;
    process.kill(proc.pid, 'SIGUSR2');
  });

  proc.on('exit', code => {
    exited = true;
    assert.strictEqual(code, 2);
  });

  process.on('beforeExit', () => {
    if (!exited) throw new Error('Process did not exit!');
  });
}
