function* fruits() {
  yield 'Banana';
  yield 'Cherry';
  yield 'Coconut';
}

function* counter() {
  yield 1;
  yield* ['Pizza', 'Car', 'Fish'];
  yield* 'Hello';
  yield* fruits();
  yield 2;
  console.log('End of generator');
}

const counterGenerator = counter();

for (const value of counterGenerator) {
  console.log(value);
}

console.log(counterGenerator.next());
