const waitASecond = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

console.time('timerLabel');

waitASecond()
  .then(() => {
    console.timeLog('timerLabel');
    return waitASecond();
  })
  .then(() => {
    console.timeEnd('timerLabel');
  });
