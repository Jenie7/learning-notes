/**
 * Tech with Nader
 * Exercises: Recursion - Javascript In Depth
 * https://youtu.be/JeR_oHRtNGY?t=2337
 *
 * Solution in this example is different than Nader's, in that it doesn't
 * consider an array to be an object.
 *
 * Run in Chrome to have clearer logging messages.
 */

const callStackMap = new Map();
let counter = 0;

function flatten(obj) {
  let collector = {};

  counter += 1;
  callStackMap.set(obj, counter);
  console.log('');
  console.log(`New stack #${callStackMap.get(obj)}`);
  console.log(`obj at stack #${callStackMap.get(obj)} =`, obj);

  const entries = Object.entries(obj);
  for (let index = 0; index < entries.length; index += 1) {
    const [key, value] = entries[index];
    const isObject =
      Object.prototype.toString.call(value) === '[object Object]';
    // const isArray = Object.prototype.toString.call(value) === '[object Array]';

    if (!isObject /* && !isArray */) {
      // Base case
      collector[key] = value;
    } else {
      // Recursive case
      collector = { ...collector, ...flatten(value) };
    }

    console.log(`collector at stack #${callStackMap.get(obj)} =`, collector);
  }

  return collector;
}

console.log(
  flatten({
    id: 1,
    name: 'bob',
    happy: true,
    friend: {
      id2: 2,
      name2: 'alice',
      happy2: true,
      friend: {
        id3: 3,
        name3: 'oof',
        happy3: true,
        hi: [1, 2, 3],
        bye: (str) => console.log(str),
        oof: null,
        foo: undefined,
      },
    },
  })
);
