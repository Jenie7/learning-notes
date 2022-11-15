function randomNumber(minimum, maximum) {
  const areIntegers =
    Number(minimum) === minimum &&
    minimum % 1 === 0 &&
    Number(maximum) === maximum &&
    maximum % 1 === 0;
  if (!areIntegers) {
    throw new Error('minimum and maximum are not both integers!');
  }
  if (minimum > maximum) {
    throw new Error('minimum can not be bigger than maximum!');
  }

  console.log(
    `\n# Random number between ${minimum} (inclusive) and ${maximum} (exclusive)`
  );

  console.log('\n------------------------');
  console.log('');

  console.log(`const range = ${maximum} - ${minimum}`);
  const range = maximum - minimum;
  console.log('=>', range);

  console.log('\n------------------------');
  console.log('');

  console.log(
    `// Random number greater than or equal to 0 and less than ${range}`
  );
  console.log('');
  console.log(`Math.random() * ${range};`);
  const random = Math.random() * range;
  console.log('=>', random);

  console.log('\n------------------------');
  console.log('');

  console.log('// To integer');
  console.log('');
  console.log(`Math.floor(${random});`);
  const randomInteger = Math.floor(random);
  console.log('=>', randomInteger);

  console.log('\n------------------------');
  console.log('');

  console.log(`// Finally add the minimum`);
  console.log('');
  console.log(`${randomInteger} + ${minimum}`);
  console.log('=>', randomInteger + minimum);

  console.log('\n------------------------ Extra');
  console.log('');

  console.log('// The final code in one line');
  console.log('');
  console.log(`Math.floor(Math.random() * ${range}) + ${minimum}`);
  console.log('=>', Math.floor(Math.random() * (maximum - minimum)) + minimum);

  if (range < 9) {
    console.log('\n------------------------');
    console.log('');
    const possibilities = [];
    for (let index = 0; index < 1000000; index += 1) {
      const newRandom = Math.floor(Math.random() * range);
      if (!possibilities.includes(newRandom)) {
        possibilities.push(newRandom);
      }
    }

    console.log('// Possibilities in 1000000 runs for the range from zero');
    console.log('');
    console.log(`Math.floor(Math.random() * ${range})`);
    console.log(
      '=>',
      possibilities.sort((a, b) => a - b)
    );
  }

  if (range < 9) {
    console.log('\n------------------------');
    console.log('');
    const possibilities = [];
    for (let index = 0; index < 1000000; index += 1) {
      const newRandom = Math.floor(Math.random() * range) + minimum;
      if (!possibilities.includes(newRandom)) {
        possibilities.push(newRandom);
      }
    }

    console.log('// Possibilities in 1000000 runs for the final code');
    console.log('');
    console.log(`Math.floor(Math.random() * ${range}) + ${minimum}`);
    console.log(
      '=>',
      possibilities.sort((a, b) => a - b)
    );
    console.log('');
  }
}

randomNumber(1, 11);
// randomNumber(-3, 3);
// randomNumber(-3, 7);
// randomNumber(-10, -1);
