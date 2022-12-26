/**
 * The Array.from() static method creates a new, shallow-copied Array
 * instance from an iterable or array-like object.
 *
 * https://dev.moz/js/Global_Objects/Array/from
 */

// Random number from 1-10 (inclusive)
const random = () => Math.floor(Math.random() * 10) + 1;

const array = Array.from({ length: 10 }, random);
console.log(array);
