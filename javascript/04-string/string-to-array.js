require('../../projects/assets/log-counter');

const word = 'Hello';

console.log([...word]);
console.log(word.split(''));
console.log(word.split());

/**
 * You must be careful which level of characters you are iterating on.
 * For example, split("") will split by UTF-16 code units and will
 * separate surrogate pairs.
 * https://dev.moz/js/Global_Objects/String#description
 */

console.log('😄'.split(''));
