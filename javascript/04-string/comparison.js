/**
 * Comparison operators, including === and ==, compare strings
 * case-sensitively.
 *
 * Strings are compared letter-by-letter.
 *
 * If both strings end at the same length, then they are equal.
 * Otherwise, the longer string is greater.
 *
 * A capital letter "A" is not equal to the lowercase "a".
 * The lowercase "a" is greater.
 *
 * https://javascript.info/comparison
 */

const a = 'a';
const b = 'b';
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

console.log('Z' > 'A');
console.log('Glow' > 'Glee');
console.log('Bee' > 'Be');
console.log('a' > 'A');
