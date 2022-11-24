let str = '';

for (let i = 48; i <= 220; i += 1) {
  str += String.fromCodePoint(i);
}
console.log(str);
