/*

Infinity (or -Infinity) is the value JavaScript will return if you
calculate a number outside the largest possible number.

*/

let myNumber = 2;

// Execute until Infinity
while (myNumber !== Infinity) {
  // myNumber *= myNumber;
  myNumber **= 2;
  console.log(myNumber);
}

/**
 * Division by 0 (zero) also generates Infinity.
 *
 * 1/0.1 = 10
 * 1/0.01 = 100
 * 1/0.001 = 1000
 * 1/0.0000000001 = 10000000000
 * 1/1e-308 = 1e308
 *
 * https://stackoverflow.com/questions/21893525/
 */
