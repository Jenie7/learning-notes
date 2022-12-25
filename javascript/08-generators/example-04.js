/* eslint-disable no-unreachable */

function* counter() {
  yield 1;
  yield 2;

  return;

  yield 3;
  console.log('End of generator');
}

const counterGenerator = counter();

for (const value of counterGenerator) {
  console.log(value);
}

console.log(counterGenerator.next());
