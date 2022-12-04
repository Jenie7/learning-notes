/* eslint-disable */

const animal = 'spider';
console.log(animal);

/**
 * Note that it is not the animal variable that we pass to console.log. We might
 * say that colloquially, but we can’t really pass variables to functions.
 * We pass the current value of the animal variable.
 * It turns out that a variable name like animal can serve as an expression too!
 *
 * https://justjavascript.com/learn/03-values-and-variables
 */

function double(x) {
  x = x * 2;
}

let money = 10;
double(money);
console.log(money);

let numberOfTentacles = 10;
numberOfTentacles = 'eight';
console.log(typeof numberOfTentacles);
