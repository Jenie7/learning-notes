require('../../projects/assets/log-counter');

/**
 * unary +
 * Is actually does the same thing as Number(...), but is shorter.
 * Has no effect on numbers.
 *
 * Comparisons (> < >= <=) convert null to a number, treating
 * it as 0, unlike equality check.
 * https://javascript.info/comparison
 */

const x = 1;
console.log(+x);

const y = -2;
console.log(+y);

console.info('------------------------');

console.log(+true);
console.log(+false);
console.log(+'');
console.log(Number(undefined));
console.log(Number(null));

const apples = '2';
const oranges = '3';

// both values converted to numbers before the binary plus
console.log(+apples + +oranges);

/**
 * Another operator is unary -
 * A unary operator that reverses the sign.
 */
