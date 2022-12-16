/**
 * Tech with Nader
 * Exercises: Recursion - Javascript In Depth
 * https://youtu.be/JeR_oHRtNGY?t=163
 *
 * Could be solved by loop, but a great bonus to have it solved by recursion.
 * This example can lead to stack overflow, therefor solving it with loop
 * would be the better option.
 */

function fizzbuzz(startNum, endNum) {
  // Base case
  if (startNum > endNum) {
    return;
  }

  const divisibleBy3 = startNum % 3 === 0;
  const divisibleBy5 = startNum % 5 === 0;

  if (divisibleBy3 && divisibleBy5) {
    console.log(`${startNum} FizzBuzz`);
  } else if (divisibleBy3) {
    console.log(`${startNum} Fizz`);
  } else if (divisibleBy5) {
    console.log(`${startNum} Buzz`);
  } else {
    console.log(startNum);
  }

  // Recursive case
  fizzbuzz(startNum + 1, endNum);
}

fizzbuzz(1, 20);
