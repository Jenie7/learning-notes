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
 * Don’t use comparisons >= > < <= with a variable which
 * may be null/undefined.
 *
 * When comparing values of different types, JavaScript converts
 * the values to numbers.
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
console.log('a' > '1');
console.log('2' > '12');
console.log('2' > 1);
// eslint-disable-next-line eqeqeq
console.log('01' == 1);

/**
 * @see {@link ./code-point.js}
 */
