function* infiniteCounter() {
  let i = 0;
  while (!0) {
    yield i;
    i += 1;
  }
}

const counterGenerator = infiniteCounter();

// Infinite loop
// for (const value of counterGenerator) console.log(value);

let loops = 5;
while (loops) {
  console.log(counterGenerator.next());
  loops -= 1;
}
