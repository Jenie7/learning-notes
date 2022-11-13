let a = 1;
const b = 2;

const c = 3 - (a = b + 1);

console.log(a);
console.log(c);

/*

Although, please don’t write the code like that. Such tricks definitely
don’t make code clearer or readable.

Also another thing to know and not to use for the same reason is,
chaining assignments.

let a, b, c;
a = b = c = 2 + 2;
Chained assignments evaluate from right to left. First, the rightmost
expression 2 + 2 is evaluated and then assigned to the variables on the
left: c, b and a. At the end, all the variables share a single value.


*/
