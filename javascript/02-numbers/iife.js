/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
// Ways to create IIFE

(function () {
  console.log('Parentheses around the function');
})();

// prettier-ignore
(function() {
  console.log("Parentheses around the whole thing");
}());

// prettier-ignore
!function() {
  console.log("Bitwise NOT operator starts the expression");
}();

// prettier-ignore
+function() {
  console.log("Unary plus starts the expression");
}();
