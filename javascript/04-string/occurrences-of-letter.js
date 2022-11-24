/* eslint-disable no-constant-condition */
require('../../projects/assets/log-counter');

const text = 'To be, or not to be, that is the question.';

const target = 'e';
let startIndex = 0;
let foundOne = text.indexOf(target, startIndex);
const collector = [];

while (foundOne !== -1) {
  collector.push(foundOne);
  startIndex = foundOne + 1;
  foundOne = text.indexOf(target, startIndex);
}

console.log(collector);

console.log(text.match(/e/g));
console.log(text.match(/e/g)?.length || 0);

/* X, because +undefined is NaN
console.log(Number(text.match(/x/g)?.length)); */
console.log(Number(undefined));
console.log(+null);

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
