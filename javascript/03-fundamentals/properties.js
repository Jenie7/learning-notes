/* eslint-disable */

/**
 * In our JavaScript universe, both variables and properties act
 * like “wires.”However, the wires of properties start from objects
 * rather than from our code.
 *
 * Importantly, properties don’t contain values—they point to them!
 * Remember that our universe is full of wires. Some of them start
 * from our code (variables), and others start from objects (properties).
 * All wires always point to values.
 *
 * JavaScript uses a set of rules that looks something like this:
 *  • Figure out the value of the part before the dot (.).
 *  • If that value is null or undefined, throw an error immediately.
 *  • Check whether a property with that name exists on our object:
 *     a. If it exists, answer with the value this property points to.
 *     b. If it doesn’t exist, answer with the undefined value.
 *
 * Object does not have property boat, when accessing it, you will get undefined,
 * this does not mean that our object has a boat property pointing to undefined.
 * But because the rules say that if a property doesn't exist, the value of the
 * property expression is the undefined value.
 *
 * Objects might appear “nested” in code, but in our universe, each object
 * is completely separate. An object cannot be “inside” of another object!
 *
 * We figure out the wire, then the value which can be another object,
 * then point the wire to that value.
 *
 * People like to say “mutate” because this word has a sinister undertone.
 * It reminds you to exercise extra caution. This doesn’t mean mutation
 * is “bad”—it’s just programming!—but you need to be very intentional about it.
 *
 * const prevents variable reassignment—not object mutation.
 *
 * By the time you mutate an object, variables and properties may already by
 * pointing to it. Your mutation affects any code “following” those wires later.
 */
