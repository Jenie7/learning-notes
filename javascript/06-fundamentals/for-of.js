/* eslint-disable no-sparse-arrays */

const object = [1, , , , , , , 4, 'x'];

for (const property of object) {
  console.log(`${property}: ${object[property]}`);
}
