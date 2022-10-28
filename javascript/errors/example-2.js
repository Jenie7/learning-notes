let index;
try {
  for (index = 1; index <= 10; index += 1) {
    console.log(index);

    if (index === 5) {
      throw new TypeError('Boom');
    }
  }
} catch (error) {
  console.error(`Error on loop #${index}`);
}

console.log('Program complete!');
