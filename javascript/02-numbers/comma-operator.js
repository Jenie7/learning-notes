// const a = (1 + 2, console.log('X'), 3 + 4);
const x = (1 + 2, 3 + 4);
console.log(x);

/*

The comma operator allows us to evaluate several expressions, dividing
them with a comma ,. Each of them is evaluated but only the result of the
last one is returned.

# Comma has a very low precedence

Please note that the comma operator has very low precedence, lower than
=, so parentheses are important in the example above.
Without them: a = 1 + 2, 3 + 4 evaluates + first, summing the numbers
into a = 3, 7, then the assignment operator = assigns a = 3, and the rest
is ignored. It’s like (a = 1 + 2), 3 + 4.

https://javascript.info/operators#comma

*/

/* X
const b = 1 + 2, 3 + 4;
console.log(b); */

/* When can be useful */

let a;
let b;
for (a = 1, b = a + 5; a <= 5; a += 1, b -= 2) {
  console.log('--------------');
  console.log(a);
  console.log(b);
  //   console.log(c);
}
