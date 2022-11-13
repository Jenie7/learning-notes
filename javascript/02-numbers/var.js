/* eslint-disable no-use-before-define */
/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

/* 

IMPORTANT NOTE!

Coder Runner is not reliable, as sometimes would log catch log later.

Note: I removed try and catch all together

*/

/* “var” has no block scope */

const condition = !0;
console.log(test);

if (condition) {
  var test = 123;
}

console.log(test);

console.log('------------------------');

for (var i = 0; i < 10; i += 1) {
  console.log(i, '<--- Inside loop');
  var one = 1;
  // ...
}

console.log(i);
console.log(one);

console.log('------------------------');

/* 

But If a code block is inside a function, then var becomes
a function-level variable.

*/

function sayHi() {
  if (condition) {
    var phrase = 'Hello';
  }

  console.log(phrase); // Works
}

sayHi();
// console.log(phrase); <--- ReferenceError: phrase is not defined

console.log('------------------------');

/*

- “var” tolerates re-declarations
https://javascript.info/var#var-tolerates-redeclarations

“var” variables can be declared below their use
People also call such behavior “hoisting” (raising), because all var
are “hoisted” (raised) to the top of the function.

In another word,
The declaration is processed at the start of function 
execution (“hoisted”), but the assignment always works at the place 
where it appears.

*/

function sayHi2() {
  // Declarations are hoisted, but assignments are not.
  console.log(phrase2); // <--- undefined
  phrase2 = 'Hello2';

  // eslint-disable-next-line no-constant-condition
  if (false) {
    var phrase2;
  }

  console.log(phrase2);
}

sayHi2();

/* 

immediately-invoked function expressions were like a workaround for var
https://javascript.info/var#iife

*/
