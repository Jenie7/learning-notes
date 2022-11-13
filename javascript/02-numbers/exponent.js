require('../../projects/assets/log-counter');

/*

# **

Raises a base number to the exponent power, that is, the base number
multiplied by itself, exponent times.

Math.pow() is equivalent to the ** operator, except 
Math.pow() only accepts numbers.

*/

console.log(5 ** 2);
// eslint-disable-next-line prefer-exponentiation-operator, no-restricted-properties
console.log(Math.pow(5, 2));

// 2 (power of 1/2 is the same as a square root)
console.log(4 ** (1 / 2));

// 2 (power of 1/3 is the same as a cubic root)
console.log(8 ** (1 / 3));

/* Need to search about this issue */
console.log(125 ** (1 / 3)); // !!
console.log(5 * 5 * 5);
