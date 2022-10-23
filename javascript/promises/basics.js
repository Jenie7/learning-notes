const iceCreamOrder = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Here is your ice cream!'), 1500);
  // setTimeout(() => reject("I'm sorry, we are out of ice cream!"), 2000);
});

iceCreamOrder
  .then((resolveValue) => {
    // Promise { <fulfilled> }
    console.log(resolveValue);
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('\n\nHey wait!!\nYou forgot your phone!');
      }, 3000)
    );
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

iceCreamOrder
  .then(() => console.log('Thank you for visiting us!'))
  .catch(() => console.error(':('));
