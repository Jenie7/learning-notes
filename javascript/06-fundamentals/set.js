/* eslint-disable no-restricted-syntax */
require('../../projects/assets/log-counter');

/**
 * The Set object lets you store unique values of any type, whether primitive
 * values or object references.
 *
 * • Follows same-value equality, but +0 and -0 are considered equal
 * • Supports .keys, .values, .entries, and .forEach
 * • .entries object has [['value1', 'value1'], ['value2', 'value2']]
 * • Use the regular Set constructor to transform an Array into set
 * • Use Array.from() or spread syntax to transform to array
 * •
 * •
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SET
 */

const mySet = new Set();

mySet.add(5);
mySet.add(5);
mySet.add('Hello!');

const obj = { a: 1, b: 2 };
mySet.add(obj);

mySet.add({ a: 1, b: 2 });

/* [1] */
console.log(mySet.has(obj));

/* [2] */
console.log(mySet.has({ a: 1, b: 2 }));

/* [3] */
console.log(mySet);

mySet.delete(5);

/* [4] */
console.log(mySet);

mySet.add(5);

/* [5] */
console.log(mySet);

/* for (const item of mySet) {
  console.info(item);
}

for (const item of mySet.keys()) {
  console.info(item);
}

for (const item of mySet.values()) {
  console.info(item);
} */

// key and value are the same here
for (const [key /* , value */] of mySet.entries()) {
  console.info(key);
}

mySet.clear();

/* [6] */
console.log(mySet);

/* [7] */
console.log(new Set('firefox'));
