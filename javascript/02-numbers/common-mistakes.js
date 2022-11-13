/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
require('../../projects/assets/log-counter');

let x;
let y;
let z;
let result;

// ------------------------ [1]

/* Expecting the result1 to be 30 */

x = 10;
y = 20;
result = 'first result is: ' + x + y;

console.log(result);

// ------------------------ [2]

/*

The JavaScript interpreter works from left to right.
First 10 + 20 is added because x and y are both numbers.
Then 30 + "30" is concatenated because z is a string.

*/

x = 10;
y = 20;
z = '30';
result = x + y + z;

console.log(result);

// ------------------------ [3]

/* 

This will work, as JavaScript will TRY to convert strings to numbers'
in all numeric operations.

NOTE: this works for * and / and - but not for + as JavaScript uses
the + operator to concatenate strings.

https://www.w3schools.com/js/js_numbers.asp

*/

x = '100';
y = '10';
result = x / y;

console.log(result);

// ------------------------

/*

Using NaN in a mathematical operation, the result will also be NaN,
or the result might be a concatenation like NaN5 if 5 is string.

*/

/*

Never write a number with a leading zero (like 07). Some JavaScript
versions interpret numbers as octal if they are written with a
leading zero.

*/

/*

Do not create Number objects like new Number(123);

The new keyword complicates the code and slows down execution speed.
Number Objects can produce unexpected results.

Comparing two JavaScript objects always returns false.


*/

/*

"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

https://javascript.info/operators#type-conversions

*/

/*

you cannot declare and assign a value to a variable and read
its value in the same line.

You can see that clearly in the DevTools

Try this in the DevTools
> let o = 5
> undefined
> o+=1
> 8

*/
