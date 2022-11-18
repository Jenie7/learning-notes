/* eslint-disable no-eval */
/* eslint-disable no-new-wrappers */
/*

Template literals respect the line breaks. Unlike the other two ' and ",
which need \n.

*/

const output1 = `I like the song.
I gave it a score of 90%.`;
console.log(output1);

console.log('------------------------');

const output2 = 'I like the song.\nI gave it a score of 90%.';
console.log(output2);

console.log('------------------------');

// A literal is a string primitive
const strPrim = 'foo';

// Coerced into the string primitive "1"
const strPrim2 = String(1);

// Coerced into the string primitive "true"
const strPrim3 = String(true);

// String with new returns a string wrapper object.
const strObj = new String(strPrim);

console.log({
  strPrim: [strPrim, typeof strPrim],
  strPrim2: [strPrim2, typeof strPrim2],
  strPrim3: [strPrim3, typeof strPrim3],
  strObj: [strObj, typeof strObj],
});

console.log('------------------------');

const s1 = '2 + 2'; // creates a string primitive
const s2 = new String('2 + 2'); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4

/* 
undefined turns into "undefined".
null turns into "null".
true turns into "true"; false turns into "false".
*/
