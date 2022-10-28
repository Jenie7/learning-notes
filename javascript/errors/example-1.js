for (let index = 1; index <= 10; index += 1) {
  try {
    if (index === 5) {
      throw new TypeError('Boom');
    }
    console.log(index);
  } catch {
    console.error(`Error on loop #${index}`);
  }
}

console.log('Program complete!');
