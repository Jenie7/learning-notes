/*

So, if there’s a NaN somewhere in a mathematical expression, it
propagates to the whole result

(there’s only one exception to that: NaN ** 0 is 1).

*/

console.log(NaN ** 0);

/*

Mathematical operations are safe in JavaScript
Doing maths is “safe”. We can do anything: divide by zero, treat
non-numeric strings as numbers, etc.

The script will never stop with a fatal error (“die”). At worst,
we’ll get NaN as the result.

*/
