const sleep = require('../../projects/assets/sleep');

/**
 * Tech with Nader
 * Generators - Javascript In Depth
 * https://youtu.be/0i0jYeZmt5c
 *
 * The function* declaration (function keyword followed by an asterisk)
 * defines a generator function, which returns a Generator object.
 * Generator functions do not have arrow function counterparts.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 */

function* counter() {
  // Code in here will not run on this function call

  console.log('x');
  yield 1;

  console.log('xx');
  yield 2;

  console.log('xxx');
  yield 3;

  console.log('End of generator');
}

console.log(counter);

// Next line will not run the code inside that function
const counterGenerator = counter();
console.log(counterGenerator);

(async () => {
  console.log('');
  console.log('Start');
  console.log('');

  for (let index = 1; index <= 8; index += 1) {
    console.log(`#${index}`);
    console.log(counterGenerator.next());
    console.log('');
    await sleep(3000);
  }
})();
