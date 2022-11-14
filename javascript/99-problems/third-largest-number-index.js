const originalArray = [91, 2, 33, 51, 54, 39, 34, 61, 34, 91];

/* IMPORTANT: answers did not take into account the duplicates */

// ------------------------ [1]

/* const newSortedArray = [...originalArray].sort((a, b) => b - a);
console.log(newSortedArray);

const thirdLargestNumber = newSortedArray[2];

console.log(originalArray.indexOf(thirdLargestNumber)); */

// ------------------------ [2]

/* This is inefficient because

- They're spreading the array on every iteration
- indexOf is an expensive operation if the number you're looking for
  is close to the end of the array
- Its modifying the existing array but this can be simply resolved
  by duplicating it.

https://www.reddit.com/r/learnjavascript/comments/yuqqu9 */

/* for (let i = 0; i < 2; i += 1) {
  originalArray[originalArray.indexOf(Math.max(...originalArray))] =
    Number.NEGATIVE_INFINITY;
  console.log(originalArray);
}
const thirdLargestNumberIndex = originalArray.indexOf(
  Math.max(...originalArray)
);

console.log(thirdLargestNumberIndex); */

// ------------------------ [3]

/* function nthLargest(arr, n) {
  const map = arr
    .map((value, index) => ({ index, value }))
    .sort((e1, e2) => e2.value - e1.value);
  console.log(map);
  return map[n - 1].index;
}

const result = nthLargest(originalArray, 3);
console.log(`Number is ${originalArray[result]} at index ${result} `); */

// ------------------------ [4]

function thirdLargestNumber(arr) {
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

console.log(thirdLargestNumber(originalArray));
// 3rd largest number: 54, index(s): 4
