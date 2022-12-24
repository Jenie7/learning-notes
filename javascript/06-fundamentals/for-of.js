/* eslint-disable no-sparse-arrays */

/**
 * The for...of statement executes a loop that operates on a sequence of
 * values sourced from an iterable object. Iterable objects include
 * instances of built-ins such as Array, String, TypedArray, Map, Set,
 * NodeList (and other DOM collections), as well as the arguments object,
 * generators produced by generator functions, and user-defined iterables.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */

const array = [1, , , , 4, 'x'];
for (const item of array) {
  console.log(item);
}

console.log('------------------------');

const string = 'Hello!';
for (const character of string) {
  console.log(character);
}
