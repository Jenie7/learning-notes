/* eslint-disable no-unused-vars */
require('../../projects/assets/log-counter');

/*

Three methods for extracting String Parts

.slice(start, end);
.substring(start, end);
.substr(start, length);

*/

const text = 'Apple, Banana, Kiwi';

// ------------------------ [1]

const banana = text.slice(7, 13);
const kiwi = text.slice(-4);
console.log(banana);
// console.log(kiwi);

/* Notes for slice()

- If you omit the second parameter, the method will slice out the
rest of the string.

- If a parameter is negative, the position is counted from the end
of the string. */

// ------------------------ [2]

/* Differences between substring() and slice() 

The substring() method swaps its two arguments if indexStart is
greater than indexEnd. */

const moz = 'Mozilla';
console.log({
  slice: moz.slice(5, 2),
  substring: moz.substring(5, 2),
});

/* If either or both of the arguments are negative or NaN,
the substring() method treats them as if they were 0. In another word
start and end values less than 0 are treated as 0 in substring() */

/* console.log({
  '-5, 2': moz.substring(-5, 2), // "Mo"
  '-5, -2': moz.substring(-5, -2), // ""
}); */

/* slice() also treats NaN as 0, but when it is given negative values it
counts backwards from the end of the string to find the indexes. */

// ------------------------ [3]

/* substr() is deprecated

substr() is similar to slice(). The difference is that the second
parameter specifies the length of the extracted part. */

const apple = text.substr(0, 5);
console.log(apple);
