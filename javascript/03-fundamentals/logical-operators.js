/* eslint-disable no-unused-expressions */
require('../../projects/assets/log-counter');

/**
 * Four logical operators in JavaScript
 *
 * || (OR aka chain)
 * Represented with two vertical line symbols.
 *
 * && (AND)
 * Represented with two ampersands.
 *
 * ! (NOT)
 * Represented with an exclamation sign.
 *
 * ?? (Nullish Coalescing)
 *
 * https://javascript.info/logical-operators
 */

/**
 * Notes
 *
 * If an operand is not a boolean, it’s converted to a boolean
 * for the evaluation.
 *
 * || returns the first truthy value or the last one if no truthy
 * value is found.
 *
 * && returns the first falsy value or the last value if
 * none were found.
 *
 * Precedence of AND && is higher than OR ||, and the precedence
 * of NOT ! is the highest of all logical operators.
 */

const firstName = '';
const lastName = '';
const nickName = 'Noice';
const age = 10;

/* [1] If operand is truthy, stops and returns its value */
console.log(firstName || lastName || nickName || 'Anonymous');

/* [2] Short-circuit evaluation */
false || console.log('Short-circuit');

/* [3] If operand is falsy, stops and returns its value */
console.log(nickName && firstName && 'Hello!');

/* [4] Returns the inverse value */
console.log(!firstName);

/* [5] double !! is converts a value to boolean */
console.log(!!firstName);
// console.log(Boolean(firstName));

/* [6] Check that age is NOT between 14 and 90 inclusively */
if (!(age >= 14 && age <= 90)) {
  console.log({ age });
}
/* [7] Check that age is NOT between 14 and 90 inclusively */
if (age < 14 || age > 90) {
  console.log({ age });
}
