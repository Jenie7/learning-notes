require('../../projects/assets/log-counter');

/**
 * lastIndexOf(searchString, position)
 * The method returns the index of the last occurrence of the specified
 * substring at a position less than or equal to position.
 * If position is less than 0, the behavior is the same as for 0.
 */

// [1]
console.log('canal'.lastIndexOf('a'));

// [2]
console.log('canal'.lastIndexOf('a', 2));

// [3]
console.log('canal'.lastIndexOf('a', 0));

// [4]
console.log('canal'.lastIndexOf('x'));

// [5]
console.log('canal'.lastIndexOf('c', -5));

// [6]
console.log('canal'.lastIndexOf('c', 0));

// [7]
console.log('canal'.lastIndexOf(''));

// [8]
console.log('canal'.lastIndexOf('', 2));
