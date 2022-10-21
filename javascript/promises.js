const iceCreamOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Here is your ice cream!');
    reject("I'm sorry, we are out of ice cream!");
  }, 3000);
});

iceCreamOrder
  .then((resolveValue) => {
    console.log(iceCreamOrder);
    console.log(resolveValue);
    return 'Have a good day!';
  })
  .then((anotherValue) => {
    console.log(anotherValue);
  })
  .catch((rejectionValue) => {
    console.log(iceCreamOrder);
    console.log(rejectionValue);
  });

console.log(iceCreamOrder);
console.log('Waiting..');
console.log('Using your phone..');
