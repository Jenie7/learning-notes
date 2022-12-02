/* eslint-disable no-loss-of-precision */

const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);

const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

console.log('-----------------------');

console.log(lotsOfDecimal.toFixed(0));
console.log(lotsOfDecimal.toFixed(1));
console.log(lotsOfDecimal.toFixed(2));
console.log(lotsOfDecimal.toFixed(3));
console.log(lotsOfDecimal.toFixed(4));
console.log(lotsOfDecimal.toFixed(5));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
