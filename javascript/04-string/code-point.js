let str = '';

for (let i = 65; i <= 220; i += 1) {
  str += String.fromCodePoint(i);
}
console.log(str);
