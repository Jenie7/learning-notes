function* countTo10() {
  let i = 0;
  while (i <= 10) {
    yield i;
    i += 1;
  }
}

const generatorObj = countTo10();

console.log(generatorObj.next());

for (const value of generatorObj) {
  console.log(value);
}
