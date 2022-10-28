console.log('Program start!');

const requestRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 1000);
  return new Promise((resolve) => {
    setTimeout(resolve, 2000, randomNumber);
  });
};

const getRandomNumbers = async () => {
  // Random number request takes 2 seconds to complete!

  console.log('Requesting first random number..');
  const firstRandom = /* await */ requestRandomNumber();
  // console.log(firstRandom);

  console.log('Requesting second random number..');
  const secondRandom = /* await */ requestRandomNumber();
  // console.log(secondRandom);

  console.log('Requesting third random number..');
  const thirdRandom = /* await */ requestRandomNumber();
  // console.log(thirdRandom);

  const allRandomNumbers = await Promise.all([
    firstRandom,
    secondRandom,
    thirdRandom,
  ]);
  console.log('All random numbers =>', allRandomNumbers);
};

getRandomNumbers();

console.log('Program complete!');
