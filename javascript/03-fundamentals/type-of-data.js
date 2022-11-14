require('../../projects/assets/log-counter');

/*

There are 8 basic data types in JavaScript.
Seven primitive, and one non-primitive data type that is object

- Normally, one uses null to assign an “empty” or “unknown” value
to a variable, while undefined is reserved as a default initial
value for unassigned things.

- The typeof(x) syntax.
You may also come across another syntax: typeof(x). It’s the same as
typeof x. To put it clear: typeof is an OPERATOR, not a function.
The parentheses here aren’t a part of typeof. It’s the kind of
parentheses used for mathematical grouping.

*/

console.log(1);
console.log(10n);
console.log('text');
console.log(true);
console.log(undefined);

/*
Definitely, null is not an object. It is a special value with a separate
type of its own. The behavior of typeof is wrong here.
*/
console.log(null);
// console.log([]);
// console.log({});

/*
There’s no special “function” type in JavaScript. Functions belong to the
object type. But typeof treats them differently, returning "function".
That also comes from the early days of JavaScript. Technically, such
behavior isn’t correct, but can be convenient in practice.
*/
console.log(console.log);

console.log(Symbol('id'));
