require('../../projects/assets/log-counter');

/**
 * By default, JavaScript displays numbers as base 10 decimals.
 * But you can use the toString() method to output numbers from base 2
 * to base 36.
 *
 * - Hexadecimal is base 16
 * - Decimal is base 10
 * - Octal is base 8
 * - Binary is base 2
 *
 * https://www.rapidtables.com/convert/number/hex-to-decimal.html
 */

const myNumber = 32;

const bases = [2, 8, 10, 12, 16, 32];

console.log(myNumber);
for (let index = 0; index < bases.length; index += 1) {
  const result = myNumber.toString(bases[index]);
  const WhiteSpace = bases[index] > 9 ? '' : ' ';
  console.info(`[ base ${bases[index]} ${WhiteSpace}] ${result}`);
}

// Convert a number to a hexadecimal string with
const hexString = myNumber.toString(16);
console.log(hexString);

// And reverse the process with
console.log(parseInt(hexString, 16));
