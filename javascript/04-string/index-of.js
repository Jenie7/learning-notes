require('../../projects/assets/log-counter');

/**
 * indexOf(searchString, position)
 *
 * The method returns the index of the first occurrence of the specified
 * substring at a position greater than or equal to position, which
 * defaults to 0. If position is greater than the length of the calling
 * string, the method doesn't search the calling string at all.
 * If position is less than zero, the method behaves as it would if
 * position were 0.
 */

const text = 'hello world hello';

console.log(text.indexOf('o', -5));

console.log(text.indexOf('', 1000));
console.log(text.length);

console.log('undefined'.indexOf());
