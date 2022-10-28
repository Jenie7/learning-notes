console.log('Program starting..');
const date1 = new Date();

const goGetCandies = () => {
  return new Promise((resolve, reject) => {
    // 1/3 chance for failure
    if (Math.floor(Math.random() * 3)) {
      setTimeout(resolve, 2000, { candy: 'sour keys', quantity: 10 });
    } else {
      setTimeout(reject, 2000, new Error('Lost connection!'));
    }
  });
};

const sellCandies = (candies) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000, 25 * candies.quantity);
  });
};

const startApp = async () => {
  let candies;
  try {
    candies = await goGetCandies();
    console.log({ candies });
  } catch (err) {
    console.error(err);
    console.log(candies);
  }

  if (!candies) {
    console.error('No candies to sell!');
    return;
  }
  const expenses = await sellCandies(candies);
  console.log(expenses);
  const date2 = new Date();
  console.log(`${date2 - date1}ms passed.`);
};

startApp();

console.log('Program complete!');
