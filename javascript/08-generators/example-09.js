function* randomAmountFromRange(amount, min, max) {
  console.log(
    `Will be generating ${amount} numbers, from ${min}-${max} (inclusive)`
  );

  // Make max inclusive
  const inclusiveMax = max + 1;

  console.log(
    `Math.floor(Math.random() * (${inclusiveMax} - ${min})) + ${min}`
  );

  let loops = amount;
  while (loops) {
    yield Math.floor(Math.random() * (inclusiveMax - min)) + min;

    loops -= 1;
  }
}

const generatorObj = randomAmountFromRange(10, 3, 5);
// const generatorObj = randomAmountFromRange(3, 10, 20);
// const generatorObj = randomAmountFromRange(5, 100, 200);

for (const number of generatorObj) {
  console.log(number);
}
