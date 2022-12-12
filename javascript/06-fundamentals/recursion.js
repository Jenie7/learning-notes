/* eslint-disable no-unused-vars */
require('../../projects/assets/log-counter');

function loopCounter(originalNumber) {
  let number = originalNumber;
  let sum = 0;
  while (number > 0) {
    console.info(number);
    sum += number;
    number -= 1;
  }
  console.log(sum);
}

// loopCounter(5);

const callStackMap = {};
let counter = 0;

/**
 * Tip!
 * Run in Chrome with debug(recursionCounter) and notice the call stack.
 */
function recursionCounter(number) {
  counter += 1;
  callStackMap[number] = counter;

  console.info(number, `// stack #${callStackMap[number]}`);
  // Base case
  if (number === 1) {
    console.info(`return ${number}`, `// stack #${callStackMap[number]}`);
    return number;
  }

  // Recursion case
  const nextNumberCall = recursionCounter(number - 1);
  console.info(
    `return ${number + nextNumberCall}`,
    `// stack #${callStackMap[number]}`
  );

  return number + nextNumberCall;
}

const result = recursionCounter(5);
console.log(result);
