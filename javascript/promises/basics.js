const order = new Promise((resolve, reject) => {
  // setTimeout(() => resolve('Here is your ice cream!'), 1500);
  setTimeout(resolve, 1500, 'Here is your ice cream!');

  // Promise would not be rejected if it gets resolved first!
  setTimeout(reject, 2000, "I'm sorry, we are out of ice cream!");
});

order
  .then((resolveValue) => {
    // Promise { <fulfilled> }
    console.log(resolveValue);
    return new Promise((resolve /* , reject */) => {
      setTimeout(resolve, 3000, '\n\nHey wait!!\nYou forgot your phone!');
      // setTimeout(reject, 300, 'I would be the `rejectValue`.');
    });
  })
  .then((anotherValue) => {
    console.log(anotherValue);
  })
  .catch((rejectValue) => {
    // Promise { <rejected> }
    console.error(rejectValue);
  });

// Promise { <pending> }
console.log('Waiting..');
console.log('Using your phone..');

order
  .then(() => console.log('Thank you for visiting us!'))
  .catch(() => console.error(':('));
