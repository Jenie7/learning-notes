require('../../projects/assets/log-counter');

/* unary + */

// No effect on numbers
const x = 1;
console.log(+x); // 1

const y = -2;
console.log(+y); // -2

// Converts non-numbers
console.log(+true);
console.log(+false);
console.log(+'');

const apples = '2';
const oranges = '3';

// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

/* It actually does the same thing as Number(...), but is shorter. */

// ------------------------

/* 

unary -

A unary operator that reverses the sign 

*/
