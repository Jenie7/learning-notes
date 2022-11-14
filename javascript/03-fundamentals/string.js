/*

Template literals respect the line breaks. Unlike the other two ' and ",
which need \n.

*/

const output1 = `I like the song.
I gave it a score of 90%.`;
console.log(output1);

console.log('------------------------');

const output2 = 'I like the song.\nI gave it a score of 90%.';
console.log(output2);
