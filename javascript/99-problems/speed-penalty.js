/**
 * For example, if the speed is 80, it should print: “Points: 2”.
 * If the driver gets more than 12 points, the function should
 * print: “License suspended”.
 *
 * https://www.reddit.com/r/learnjavascript/comments/z6sj3p
 */

const speed = 74;

const points = Math.floor((speed - 70) / 5);
console.log({ points });

if (speed < 75) {
  // Or if (points <= 0)
  console.log('OK');
} else if (points < 12) {
  console.log(`Points: ${points}`);
} else {
  console.log(`License suspended by ${points} points`);
}
