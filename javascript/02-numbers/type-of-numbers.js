/*

# Different types of decimal numbers

- Integers are floating-point numbers without a fraction.
  They can either be positive or negative, e.g. 10, 400, or -5.

- Floating point numbers (floats) have decimal points and decimal places,
  for example 12.5, and 56.7786543.

- Doubles are a specific type of floating point number that have greater
  precision than standard floating point numbers (meaning that they are
  accurate to a greater number of decimal places).

*/

const myInt = 5; // A number without decimals
const myFloat = 6.667; // A number with decimals

console.log(typeof myInt);
console.log(typeof myFloat);

/*

We even have different types of number systems! Decimal is base 10
(meaning it uses 0–9 in each column), but we also have things like:

- Binary — The lowest level language of computers; 0s and 1s.

- Octal — Base 8, uses 0–7 in each column.

- Hexadecimal — Base 16, uses 0–9 and then a–f in each column.You may
  have encountered these numbers before when setting colors in CSS.

*/

/*

JavaScript Numbers are Always 64-bit Floating Point

Unlike many other programming languages, JavaScript does not define
different types of numbers, like integers, short, long, floating-point etc.

JavaScript numbers are always stored as double precision floating point
numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction)
is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign
in bit 63.

https://www.w3schools.com/js/js_numbers.asp

*/
