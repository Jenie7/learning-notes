const wait3Seconds = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

console.time('timerLabel');

wait3Seconds()
  .then(() => {
    console.timeLog('timerLabel');
    return wait3Seconds();
  })
  .then(() => {
    console.timeEnd('timerLabel');
  });
