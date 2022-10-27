let number = 1337;
try {
  number += Math.floor(Math.random() * 1000); // 0 to less than 1000
  if (number < 2000) {
    throw new Error('You lose!');
  }
  console.log('You win!');
  console.log('Your score:', number);
} catch (err) {
  console.log(err);
  console.log('Your score:', number);
}

console.log('Program complete!');
