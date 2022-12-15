/**
 * Tech with Nader
 * Exercises: Recursion - Javascript In Depth
 * https://youtu.be/JeR_oHRtNGY?t=1623
 *
 */

const callStackMap = new Map();
let counter = 0;

function flatten(list) {
  // eslint-disable-next-line prefer-const
  let collector = [];

  counter += 1;
  callStackMap.set(list, counter);
  console.log('');
  console.log('list = ', list, `// Stack #${callStackMap.get(list)}`);

  for (let index = 0; index < list.length; index += 1) {
    const item = list[index];
    // const isArray = Object.prototype.toString.call(item) === '[object Array]';
    const isArray = Array.isArray(item);

    if (!isArray) {
      // Base case
      collector.push(item);
    } else {
      // Recursive case
      // collector = [...collector, ...flatten(item)];
      collector.push(...flatten(item));
    }

    console.log(
      ...collector,
      `// Collector at stack #${callStackMap.get(list)}`
    );
  }

  return collector;
}

// console.log(flatten([1, 2, 3, [1, 2, 3]]));
// console.log(flatten([[1, 2, 3], 1, 2, 3]));
// console.log(flatten([1, [4, 5, 6, [7, 8, 9]], 2, 3]));
console.log(flatten([1, 2, [4, 5, 6, [7, 8, 9, [10]]], 3]));
