// const originalArray = [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];

/* IMPORTANT: most answers did not take into account the duplicates */

// ------------------------ [1]

/* const newSortedArray = [...originalArray].sort((a, b) => b - a);
console.log(newSortedArray);

const thirdLargestNumber = newSortedArray[2];

console.log(originalArray.indexOf(thirdLargestNumber)); */

// ------------------------ [2]

/* This is inefficient 

because

- They're spreading the array on every iteration
- indexOf is an expensive operation if the number you're looking for
  is close to the end of the array
- Its modifying the existing array but this can be simply resolved
  by duplicating it.

https://www.reddit.com/r/learnjavascript/comments/yuqqu9 */

const arr = [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];

for (let i = 0; i < 2; i += 1) {
  // array spread and Math.max are O(n), so is indexOf combination may be O(n^2)
  arr[arr.indexOf(Math.max(...arr))] = Number.NEGATIVE_INFINITY;
}
const thirdIndex = arr.indexOf(Math.max(...arr));
console.log(thirdIndex);

// ------------------------ [3]

/**
 * - Map the array into a set of objects containing the value and
 *   the index. O(n)
 * - Sort these objects O(n log n)
 * - (optional) filter objects to remove duplicates if you want O(n)
 *
 * Total complexity: O(n) + O(n log n) + O(n) => O(n log n)
 */

/* function nthLargest(arr, n, removeDuplicate) {
  const map = arr
    .map((value, index) => ({ index, value }))
    .sort((e1, e2) => e2.value - e1.value);

  const final = removeDuplicate
    ? map.filter(
        (el, idx, source) =>
          idx === 0 || source[idx].value !== source[idx - 1].value
      )
    : map;
  console.log(final);
  return final.length >= n ? final[n - 1].index : -1;
}

const arr = [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];

console.log('Without duplicate removal');
const result1 = nthLargest(arr, 3);
console.log(
  result1 >= 0
    ? `Number is ${arr[result1]} at index ${result1}`
    : 'No result found'
); */

/* console.log('With duplicate removal');
// remove duplicates
const result2 = nthLargest(arr, 3, true);
console.log(
  result2 >= 0
    ? `Number is ${arr[result2]} at index ${result2}`
    : 'No result found'
); */

/* https://www.reddit.com/user/girl-InTheSwing/
https://www.reddit.com/r/learnjavascript/comments/yuqqu9 */

// ------------------------ [4]

/* function thirdLargestNumber(arr) {
  const arrCopy = [...arr];
  const firstMax = Math.max(...arrCopy);
  const firstFilterArr = arrCopy.filter((item) => item !== firstMax);
  const secondMax = Math.max(...firstFilterArr);
  const secondFilterArr = firstFilterArr.filter((item) => item !== secondMax);
  const thirdMax = Math.max(...secondFilterArr);
  const indices = [];
  let idx = arr.indexOf(thirdMax);
  while (idx !== -1) {
    indices.push(idx);
    idx = arr.indexOf(thirdMax, idx + 1);
  }
  return `3rd largest number: ${thirdMax}, index(s): ${indices}`;
}

console.log(thirdLargestNumber(originalArray)); */

// ------------------------ [5]

/* // [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];
const list = originalArray;

let idx1 = 0;
let idx2 = 1;
let idx3 = null;

if (list[idx2] > list[idx1]) {
  idx1 = 1;
  idx2 = 0;
}

for (let i = 2; i < list.length; i += 1) {
  if (list[i] >= list[idx1]) {
    idx3 = idx2;
    idx2 = idx1;
    idx1 = i;
  } else if (list[i] >= list[idx2]) {
    idx3 = idx2;
    idx2 = i;
  } else if (idx3 === null || list[i] >= list[idx3]) {
    idx3 = i;
  }
  console.log([list[idx1], list[idx2], list[idx3]]);
}

console.log({ idx3 }); */
