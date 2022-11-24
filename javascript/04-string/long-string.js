/* eslint-disable no-multi-str */

const longString =
  'This is a very long string which needs ' +
  'to wrap across multiple lines because ' +
  'otherwise my code is unreadable.';

console.log(longString);

console.log('------------------------');

const longString2 =
  'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';

console.log(longString2);

/* Both of the above methods result in identical strings. */
