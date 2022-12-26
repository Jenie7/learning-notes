function* counter() {
  yield 1;
  yield 2;
  yield 3;

  console.log('End of generator');
}

const counterGenerator = counter();
let { value, done: closed } = counterGenerator.next();

while (!closed) {
  console.log({ value, closed });
  ({ value, done: closed } = counterGenerator.next());
}

console.log({ value, closed });
