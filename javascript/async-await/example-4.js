const crash = (ms = 500) => {
  return new Promise((resolve, reject) => {
    // 1/3 chance to get lucky!
    if (!Math.floor(Math.random() * 3)) {
      setTimeout(resolve, ms, 'You were lucky, there was no crash!');
    } else {
      setTimeout(reject, ms, new Error('Boom!'));
    }
  });
};

const causeError = async () => {
  /* let crashed;
  const result = await crash().catch((err) => {
    console.error(err);
    crashed = !0;
  });
  console.log(crashed); // true
  console.log(result); // undefined */
  let result;
  try {
    result = await crash();
    console.log({ result });
  } catch (err) {
    console.error(err);
    console.error({ result });
  }
};

console.log('Program starting..');
causeError();
console.log('Program complete!');
