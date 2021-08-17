import * as assert from 'assert';
import { exportedFunction } from './test.import';

type Person = {
  name: string;
  age: number;
};

// eslint-disable-next-line no-unused-vars
const p: Person = {
  name: 'Sonic the Hedgehog',
  // sonic is ageless
  age: -1,
};

function* aGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = aGenerator();
const values: number[] = [];
for (let i = 0; i < 5; i++) {
  const val = gen.next().value;
  values.push(Number(val));
}
assert.deepStrictEqual(values, [0, 1, 2, 3, 4]);

assert.strictEqual(exportedFunction(), 'hello');

if (require.main !== module) {
  throw new Error('Main is not the module!');
}
