require('../../projects/assets/log-counter');

const sentence = 'Hello world!';

// ------------------------ [1]

console.log(sentence.charAt(4));

// ------------------------ [2]

/* Returns the unicode of the character */
console.log(sentence.charCodeAt(4));

// ------------------------ [3]

/* Property access 

Property access might be a little unpredictable:

- It makes strings look like arrays (but they are not)
- If no character is found, [ ] returns undefined, while charAt()
  returns an empty string.
- It is read only. str[0] = "A" gives no error (but does not work!) */

console.log(sentence[4]);

// ------------------------ [4]

console.log('abc'.at);
