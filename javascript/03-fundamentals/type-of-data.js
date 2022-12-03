require('../../projects/assets/log-counter');

/**
 * There are 9 types of values.
 *
 * Primitive Values (7):
 *  • Undefined (undefined), used for unintentionally missing values.
 *  • Null (null), used for intentionally missing values.
 *  • Booleans (true and false), used for logical operations.
 *  • Numbers (-100, 3.14, and others), used for math calculations.
 *  • BigInts (uncommon and new), used for math on big numbers.
 *  • Strings ("hello", "abracadabra", and others), used for text.
 *  • Symbols (uncommon), used to perform rituals and hide secrets.
 *
 * Non-Primitive Values (2):
 *  • Objects ({} and others), used to group related data and code.
 *  • Functions (x => x * 2 and others), used to refer to code.
 *
 * Objects and functions are also values but, unlike primitive values,
 * I can manipulate them from my code.
 *
 * All primitive values are immutable (Read-only).
 *
 * Variables are not values, variables point to values.
 *
 * https://justjavascript.com/learn/02-the-javascript-universe
 * https://justjavascript.com/learn/03-values-and-variables
 */

console.log(undefined);
console.log(null);
console.log(true);
console.log(1);
console.log(10n);
console.log('hello');
console.log(Symbol('id'));

// console.log([]);
console.log({});
console.log((x) => x * 2);

/**
 * null is not an object. It is a special value with a separate type of
 * its own. The behavior of typeof is wrong here.
 *
 * There’s no special “function” type in JavaScript. Functions belong
 * to the object type. But typeof treats them differently, returning
 * "function".
 *
 * You may also come across another syntax: typeof(x). It’s the same as
 * typeof x. To put it clear: typeof is an OPERATOR, not a function.
 */
