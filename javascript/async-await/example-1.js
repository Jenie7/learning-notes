let messageCounter = 0;
const originalConsoleLog = console.log;
console.log = (...messages) => {
  messageCounter += 1;
  originalConsoleLog(`[${messageCounter}]`, ...messages);
};

function sleep(ms, message = 'Done sleeping!') {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, message);
  });
}

function crash(ms, message = 'Boom!') {
  return new Promise((resolve, reject) => {
    setTimeout(reject, ms, message);
  });
}

async function useData() {
  console.log('Fetching some data..');
  await sleep(3000);
  console.log('Data is ready!');
}

(async () => {
  console.log('Program start!');

  useData();
  console.log('Back here!');

  // Will not crash this scope
  crash(1500, !0);

  // Will not crash this scope and catches the error
  // crash(1500, !0).catch(() => console.log('I caught your error'));

  // Will crash this scope
  // await crash(1500, !0);

  console.log(await sleep(5000));
  console.log('Program complete! <<------');
})();

/* .catch(() => {
  console.log('Program crashed!');
}); */
