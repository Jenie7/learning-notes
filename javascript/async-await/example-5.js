const fetchPokemon = () => {
  return new Promise((resolve, reject) => {
    // 50/50 chance of error/success
    if (!Math.floor(Math.random() * 2)) {
      setTimeout(resolve, 2000, { data: { name: 'Pickachu', power: 20 } });
    } else {
      setTimeout(reject, 2000, new Error('Danger, danger!'));
    }
  });
};

console.log('Program starting..');

const startApp = async () => {
  let pokemonData;
  try {
    ({ data: pokemonData } = await fetchPokemon());
    console.log({ pokemonData });
  } catch (err) {
    console.error(err);
    console.log({ pokemonData });
  }
  console.log('This scope is safe, regardless of any error.');
};

startApp();

console.log('Program complete!');
