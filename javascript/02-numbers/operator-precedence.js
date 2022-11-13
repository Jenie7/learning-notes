const num1 = 10;
const num2 = 50;

const result1 = num2 + num1 / 8 + 2;
console.log({ result1 });

const result2 = (num2 + num1) / (8 + 2);
console.log({ result2 });

/*

because of operator precedence — some operators are applied before
others when calculating the result of a calculation (referred to as
an expression, in programming). Operator precedence in JavaScript is
the same as is taught in math classes in school — multiply and divide
are always done first, then add and subtract (the calculation is always
evaluated from left to right).

When using parentheses, the operations inside the parentheses are
computed first.

In depth,
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

NOTE: Unary pluses applied to values before the binary ones

*/
