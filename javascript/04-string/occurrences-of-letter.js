const text = 'To be, or not to be, that is the question.';
let count = 0;
let position = text.indexOf('e');
// console.log(position);

while (position !== -1) {
  count += 1;
  position = text.indexOf('e', position + 1);
}

console.log(count);

console.log(text.match(/e/g));
