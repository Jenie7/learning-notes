/* eslint-disable no-unused-vars */
/* eslint-disable no-loss-of-precision */

require('../../projects/assets/log-counter');

/*

Integers (numbers without a period or exponent notation) are
accurate up to 15 digits.

*/

const x = 999999999999999; // x will be 999999999999999
const y = 9999999999999999; // y will be 10000000000000000

/**
 * JavaScript numbers don’t behave exactly the same way as regular
 * mathematical numbers do.
 *
 * To be specific, floating point arithmetic is not always 100% accurate.
 *
 * https://floating-point-gui.de/formats/fp/
 */

const result1 = 0.2 + 0.1;
console.log(result1);

/* To solve the problem above, it helps to multiply and divide */

const result2 = (0.2 * 10 + 0.1 * 10) / 10;
console.log(result2);

/**
 * Another way to solve it..
 *
 * FYI, the same problem exists for multiplication, for instance 0.09 * 10
 * returns 0.8999999999999999
 *
 * https://stackoverflow.com/questions/588004/is-floating-point-math-broken/51723472#51723472
 */
console.log(parseFloat((0.1 + 0.2).toFixed(10)));

console.log(1 / 3 === 0.1 + 0.1 + 0.1);

console.log('------------------------');

console.log(2 ** 53 - 1);
// eslint-disable-next-line prefer-exponentiation-operator, no-restricted-properties
console.log(Math.pow(2, 53) - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
console.log(9007199254740992 === 9007199254740993);

/*

https://javascript.info/types#bigint-type

Also try writing to console numbers bigger than 9007199254740991.
You'll see that they are not as precise.

https://stackoverflow.com/questions/60559274
https://stackoverflow.com/questions/307179

We can see that among numbers greater than 9,007,199,254,740,992,
only even numbers are representable.

*/
