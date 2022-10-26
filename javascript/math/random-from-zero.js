function randomFromZero(multiplier = 1) {
  const random = Math.random() * multiplier;
  console.log('');
  console.log(
    `// Number greater than or equal to 0 and less than ${multiplier}`
  );
  console.log(`Math.random() * ${multiplier};`);

  console.log('=>', random);
  console.log('');
  console.log(`Math.floor(${random});`);
  console.log('=>', Math.floor(random));
  console.log('');

  const possibilities = [];
  for (let index = 0; index < 1000000; index += 1) {
    const newRandom = Math.floor(Math.random() * multiplier);
    if (!possibilities.includes(newRandom)) {
      possibilities.push(newRandom);
    }
  }

  console.log('// Possibilities in 1000000 runs');
  console.log('=>', possibilities.sort());
  console.log('');

  console.log('------------------------');
}

randomFromZero(1);
randomFromZero(3);
randomFromZero(7);
