require('../../projects/assets/log-counter');

const text = 'Hello world!';

function truncate(max) {
  return text.length > max ? `${text.slice(0, max)}...` : text;
}

console.log(truncate(5));
