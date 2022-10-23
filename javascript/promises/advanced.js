const firstPromise = new Promise((resolve) => {
  setTimeout(resolve, 3000, 10);
});

const secondPromise = new Promise((resolve) => {
  setTimeout(resolve, 5000, 20);
});

Promise.all([firstPromise, secondPromise]).then((values) => {
  const [firstValue, secondValue] = values;
  console.log(firstValue + secondValue);
});
