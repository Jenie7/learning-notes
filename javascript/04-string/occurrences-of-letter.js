/* eslint-disable no-constant-condition */
require('../../projects/assets/log-counter');

let position = 0;
const text = 'To be, or not to be, that is the question.';

const target = 'e';
let count = 0;
position = text.indexOf(target);
// console.log(position);

while (position !== -1) {
  count += 1;
  position = text.indexOf(target, position + 1);
}

console.log(count);

console.log(text.match(/e/g));
console.log(text.match(/e/g)?.length || 0);

/* X, because +undefined is NaN
console.log(Number(text.match(/x/g)?.length)); */
console.log(Number(undefined));
console.log(+null);

/* let match = text.indexOf('e');
console.log(match);
const collector = [];

while (match !== -1) {
  collector.push({ match });
  match = text.indexOf('e', match + 1);
}

console.log(collector); */

/* let pos = 0;
const collector = [];

while (true) {
  const foundAt = text.indexOf('e', pos);
  if (foundAt === -1) break;
  collector.push({ foundAt });
  pos = foundAt + 1;
}

console.log(collector); */

/* let pos = -1;
// eslint-disable-next-line no-cond-assign
while ((pos = text.indexOf(target, pos + 1)) !== -1) {
  console.info(pos);
} */
