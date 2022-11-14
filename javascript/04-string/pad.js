require('../../projects/assets/log-counter');

const text = 'Breaded Mushrooms';

/* The two pad methods pads the current string with another string
(multiple times, if needed) until the resulting string reaches the
given length */

/*

padStart(targetLength, padString)
padString is optional and defaults to " "

*/

console.log(text.padStart(text.length + 2, '.'));
// console.log(text.padStart(text.length + 10));

// ------------------------

/*

padEnd(targetLength, padString)
padString is optional and defaults to " "

*/

console.log(text.padEnd(text.length + 2, '.'));
// console.log(text.padEnd(text.length + 10));
