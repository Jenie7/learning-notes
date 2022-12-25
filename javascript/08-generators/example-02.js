// Run in DevTools for better logging

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function* counter() {
  console.log('x');
  yield 1;

  console.log('xx');
  yield 2;

  console.log('xxx');
  yield 3;

  console.log('End of generator');
}

const counterGenerator = counter();

(async () => {
  // Run loop 3 times only
  // for (let index = 1; index <= 3; index += 1) counterGenerator.next();

  console.log(counterGenerator);
  // [[GeneratorState]] : "suspended"

  // return;

  /**
   * Next loop will not run if the above is not commented, however,
   * it will toggle the GeneratorState from "suspended" to "closed".
   * It would also trigger the log of "End of generator" from that function.
   */

  for (const count of counterGenerator) {
    console.log(count);
    await sleep(1500);
  }
})();
