function sliceMessage(middleIndexValue, value) {
  const [side, amount] =
    middleIndexValue > value ? ['right', 'larger'] : ['left', 'smaller'];
  return `Slicing off the ${side} side because ${middleIndexValue}, which is in the middle of the previous list, is ${amount} than our target, that is ${value}`;
}

function binarySearch(list, value) {
  let firstIndex = 0;
  let lastIndex = list.length - 1;
  let position = -1;
  let found = !1;
  let middleIndex;
  let loopCounter = 0;

  while (!found && firstIndex <= lastIndex) {
    loopCounter += 1;
    middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    // console.log({
    //   firstIndexIndex: firstIndex,
    //   middleIndexIndex: middleIndex,
    //   lastIndexIndex: lastIndex,
    // });
    console.log('Map for the previous list to the original:');
    console.log(`firstIndex  > ${firstIndex}`);
    console.log(`middleIndex > ${middleIndex}`);
    console.log(`lastIndex   > ${lastIndex}`);
    console.log('');

    if (list[middleIndex] === value) {
      found = !0;
      position = middleIndex;
      console.log('Found!');
    } else if (list[middleIndex] > value) {
      console.log(sliceMessage(list[middleIndex], value));
      lastIndex = middleIndex - 1;
    } else {
      console.log(sliceMessage(list[middleIndex], value));
      firstIndex = middleIndex + 1;
    }

    console.log('');
    console.log(`list = [ ${list.slice(firstIndex, lastIndex + 1)} ]`);
    console.log(
      `list.length > ${list.slice(firstIndex, lastIndex + 1).length}`
    );

    if (!found && firstIndex <= lastIndex) {
      console.log('');
      console.log('------------------------');
      console.log('');
    }
  }

  console.log('');
  return { position, loopCounter };
}

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 1e6
const list = Array(101)
  .fill()
  .map((item, index) => index * 2);
console.log(`list = [ ${list} ]`);
console.log(`list.length > ${list.length}`);
console.log('');

// const random = Math.floor(Math.random() * 101) + 1;
const random = Math.floor(Math.random() * 201);
console.log(`Attempting to find the index of ${random}..`);
console.log('');
console.log('------------------------');
console.log('');

const { position, loopCounter } = binarySearch(list, random);

console.log('------------------------');
console.log('');
console.log(`list.indexOf(${random}) > ${position}`);
console.log(`list.indexOf(${random}) > ${list.indexOf(random)}`);
console.log('');
console.log(`Looped ${loopCounter} times.`);
