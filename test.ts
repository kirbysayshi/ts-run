import * as assert from 'assert';

type Person = {
  name: string;
  age: number;
};

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
  values.push(gen.next().value);
}
assert.deepEqual(values, [0, 1, 2, 3, 4]);
