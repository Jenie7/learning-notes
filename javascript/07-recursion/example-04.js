/**
 * Tech with Nader
 * Exercises: Recursion - Javascript In Depth
 * https://youtu.be/JeR_oHRtNGY?t=843
 */

// eslint-disable-next-line no-unused-vars
function palindromeLoop(string) {
  console.log(string.split('').join('  '));
  let first = 0;
  let last = string.length - 1;

  while (first !== last && first < last) {
    console.log(`${string[first]} === ${string[last]}`);
    if (string[first] !== string[last]) {
      return !1;
    }

    first += 1;
    last -= 1;
  }

  return !0;
}

// console.log(palindromeLoop('racecar'));

const callStackMap = new Map();
let counter = 0;

function palindrome(string) {
  // eslint-disable-next-line no-debugger
  debugger;
  counter += 1;
  callStackMap.set(string, counter);

  console.log([...string], `// Stack #${callStackMap.get(string)}`);

  // Base case
  if (string === '' || string.length === 1) {
    console.log(`Dead end! at stack #${callStackMap.get(string)}`);
    return !0;
  }

  // Base case
  if (string.at(0) !== string.at(-1)) {
    console.log(`${string.at(0)} !== ${string.at(-1)}`);
    return !1;
  }

  // Recursive case
  const recursiveValue = palindrome(string.slice(1, -1));
  console.log(`Stack #${callStackMap.get(string)} returned ${recursiveValue}`);

  return recursiveValue;
}

console.log(palindrome('level'));
// console.log(callStackMap);
