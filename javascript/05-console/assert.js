const errorMsg = 'the # is not even';
for (let number = 2; number <= 5; number += 1) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, '%o', { number, errorMsg });
}
