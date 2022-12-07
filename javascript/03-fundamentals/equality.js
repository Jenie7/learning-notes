/* eslint-disable no-unused-vars */
/* eslint-disable no-compare-neg-zero */
/* eslint-disable use-isnan */
/* eslint-disable no-self-compare */

require('../../projects/assets/log-counter');

/**
 * Strict Equality: a === b (triple equals).
 * Loose Equality: a == b (double equals).
 * Same Value Equality: Object.is(a, b).
 *
 * Despite Object in the method name, Object.is is not specific to objects.
 *
 * There are two rare cases where the behavior of === is different than
 * Object.is, see below.
 *
 * Same value equality, or Object.is(a, b), matches the concept of the
 * sameness of values that we introduced in the previous module.
 *
 * Loose Equality is also called abstract equality.
 * https://dorey.github.io/JavaScript-Equality-Table/
 */

// console.log(Object.is(2, 2));
// console.log(Object.is({}, {}));

console.log(Object.is(NaN, NaN));
console.log(NaN === NaN);

console.info('------------------------');

console.log(Object.is(-0, 0));
console.log(0 === -0);

console.info('------------------------');

/**
 * The one relatively common use case worth knowing for Loose Equality:
 *
 * if (x == null) {
 *   // ...
 * }
 *
 * Which is equivalent to writing:
 *
 * if (x === null || x === undefined) {
 *   // ...
 * }
 */

/**
 * An issue will rise here, use one of these methods to avoid it:
 *  • Number.isNaN(size) <--- and not the global .isNaN() *commentLinkBelow
 *  • Object.is(size, NaN)
 *  • size !== size
 *
 * https://justjavascript.com/learn/07-equality-of-values
 * https://gist.github.com/gaearon/08a85a33e3d08f3f2ca25fb17bd9d638?permalink_comment_id=4162747#gistcomment-4162747
 */
function resizeImage(size) {
  if (size === NaN) {
    // This will never get logged: the check is always false!
    console.log('Something is wrong.');
  }
  // ...
}

/** Strict Equality result using Same Value Equality method */
function strictEquals(a, b) {
  /* if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  } */

  // Because in Strict Equality, NaN equals nothing.
  if (Object.is(a, NaN) /*  && Object.is(b, NaN) */) {
    return false;
  }

  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  ) {
    return true;
  }

  /* if ([0, -0].includes(a) && Object.is(a, -b)) return true; */

  return Object.is(a, b);
}

console.log(strictEquals(NaN, NaN));
console.log(NaN === NaN);

console.log(strictEquals(0, -0));
console.log(0 === -0);

// console.log(strictEquals(strictEquals, strictEquals));

console.info('------------------------');

/** https://gist.github.com/gaearon/08a85a33e3d08f3f2ca25fb17bd9d638 */
function strictEquals2(a, b) {
  if (Object.is(a, b)) {
    // Same value.
    // Is this NaN?
    if (Object.is(a, NaN)) {
      // We already know a and b are the same, so it's enough to check a.
      // Special case #1.
      return false;
    }
    // They are equal!
    return true;
  }
  // Different value.
  // Are these 0 and -0?
  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  ) {
    // Special case #2.
    return true;
  }
  // They are not equal!
  return false;
}

// Unchecked examples by others..

function strictEquals3(a, b) {
  if (Object.is(a, NaN)) return false;
  return new Set([a]).has(b);
}

function strictEquals4(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false;
  }

  if (Object.is(a, -0) || Object.is(b, -0)) {
    return strictEquals(Math.abs(a), Math.abs(b));
  }

  return Object.is(a, b);
}

const strictEquals5 = (a, b) => {
  const objectIs = Object.is(a, b);

  if (objectIs) {
    if (Number.isNaN(a)) {
      return false;
    }
    return true;
  }

  if (typeof a === 'number' && typeof b === 'number') {
    if (Number.isNaN(a / b)) {
      return true;
    }
  }
  return false;
};
