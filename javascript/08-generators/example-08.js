function* randomNumber() {
  while (!0) {
    // Random number from 1-1000 (inclusive)
    // yield Math.floor(Math.random() * 1000) + 1;

    // Random number from 0-9 (inclusive)
    yield Math.random() * 10;
  }
}

const generatorObj = randomNumber();

let loops = 10;
while (loops) {
  console.log(generatorObj.next());
  loops -= 1;
}
