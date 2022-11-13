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

/* Division by 0 (zero) also generates Infinity */
