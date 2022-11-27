/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */

/**
 * Some functions require parameters to be specified when you are
 * invoking them. Parameters are sometimes called arguments, properties,
 * or even attributes.
 *
 * In JavaScript, parameters are the items listed between the parentheses
 * in the function declaration. Function arguments are the actual values
 * we decide to pass to the function.
 *
 * Global variables are visible from any function, unless
 * shadowed by locals.
 *
 * It’s recommended to use mainly local variables and parameters
 * in the function, not outer variables.
 *
 * There exist many well-known function prefixes like
 * create…, show…, get…, check… and so on. Use them to hint what
 * a function does.
 */

/**
 * Anonymous function This form of creating a function is also known
 * as function expression. Unlike function declaration, function
 * expressions are not hoisted. You often see anonymous functions when
 * a function expects to receive another function as a parameter.
 */
(function () {
  console.log('hello');
});
