/* eslint-disable no-proto */
/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
require('../../projects/assets/log-counter');

/**
 * By specifying __proto__ (also known as our object’s prototype),
 * we instruct JavaScript to continue looking for missing properties
 * on that object instead.
 *
 * We would only get undefined if we ran out of prototypes and still
 * hadn’t found our property.
 *
 * This sequence of objects to “visit” is known as our object’s prototype chain.
 *
 * When we read a property that doesn’t exist on our object, we’ll keep looking
 * for it on the prototype chain. If we don’t find it, we get undefined.
 *
 * All objects created with the {} syntax have the special __proto__ wire
 * pointing to a default Object Prototype.
 *
 * Mutating a shared prototype like the default object prototype, is called
 * prototype pollution, which should be avoided nowadays.
 *
 * A function’s prototype property lets you configure the __proto__ of the
 * objects that you get with new calls, which should be avoided nowadays as
 * you would usually write a class with a constructor instead.
 *
 * In practice, you probably won’t use prototypes in your code directly.
 * (In fact, even using the __proto__ syntax is discouraged.)
 *
 * https://justjavascript.com/learn/10-prototypes
 * https://gist.github.com/gaearon/a25fd42a1e6b4cc24851978df0a36571
 */

const animals = {
  brainy: false,
};

const mammal = {
  // Shadowing
  __proto__: animals,
  brainy: true,
};

const human = {
  __proto__: mammal,
  teeth: 32,
};

const gwen = {
  __proto__: human,
  age: 19,
};

console.log(gwen.brainy);
console.log(gwen.hasOwnProperty('age'));
console.log(gwen.hasOwnProperty('brainy'));

/** An Object With No Prototype */
const weirdo = {
  __proto__: null,
};

/* Polluting the default Prototype for all objects */
const obj = {};
obj.__proto__.smell = 'banana';
console.log(animals.__proto__);

const spider = {
  legs: 8,
};

const miles = {
  __proto__: spider,
};

miles.legs = 2;

/* const o = {};
let bValue = 38;
Object.defineProperty(o, 'b', {
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = 'xxx';
  },
//   enumerable: true,
//   configurable: true,
});

// https://dev.moz/js/Global_Objects/Object/defineProperty

console.log(o); */
