require('../../projects/assets/log-counter');

/**
 * The Map object holds key-value pairs and remembers the original insertion
 * order of the keys. Any value (both objects and primitive values) may be
 * used as either a key or a value.
 *
 * • keys follow same-value equality, but +0 and -0 are considered equal
 * • Does not contain any default keys such as Object's prototypes
 * • A Map is an iterable, unlike an object
 * • No native support for serialization or parsing
 * • Supports .keys, .values, .entries, and .forEach
 * • Defaults to .entries on loops, see example below
 * • The callback for .forEach has the first param as value and second as key
 * • Use the regular Map constructor to transform a 2D key-value Array into map
 * • Use Array.from() or spread syntax to transform a map into a 2D Array
 * • This a 2D key-value Array [['key1', 'value1'], ['key2', 'value2']]
 *
 * https://dev.moz/js/Global_Objects/Map
 */

const myMap = new Map();

myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

/* [1] */
console.log(myMap.get('a'));

myMap.set('a', 97);

/* [2] */
console.log(myMap.get('a'));

/* [3] */
console.log(myMap.size);

myMap.delete('b');

/* [4] */
console.log(myMap.size);

/* [5] */
console.log(myMap.has('c'));

/* [6] */
console.log(myMap);

// eslint-disable-next-line no-restricted-syntax
for (const [key, value] of myMap) {
  console.info({ key, value });
}

/* myMap.forEach((value, key) => {
  console.info({ key, value });
}); */

myMap.clear();

/* [7] */
console.log(myMap);

/* Cloning Note: Keep in mind that the data itself is not cloned */

const originalMap = new Map([[1, 'one']]);

const cloneMap = new Map(originalMap);

originalMap.set('objO', { a: 1 });
cloneMap.set('objC', originalMap.get('objO'));

cloneMap.get('objC').x = 0;

/* [8] */
console.log(originalMap);

/* [9] */
console.log(cloneMap);
