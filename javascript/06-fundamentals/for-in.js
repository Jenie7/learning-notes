/* eslint-disable no-sparse-arrays */

const object = [1, , , , , , , 4, 'x'];
// const object = { a: 1, b: 2, c: 3 };

// eslint-disable-next-line no-restricted-syntax
for (const property in object) {
  if ({}.hasOwnProperty.call(object, property)) {
    console.log(`${property}: ${object[property]}`);
  }

  // if (Object.prototype.hasOwnProperty.call(object, property)) {
  //   console.log(`${property}: ${object[property]}`);
  // }
}
