/* eslint-disable import/newline-after-import */
/* eslint-disable global-require */

const fs = require('fs-extra');

const allNotes = [...require('./notes.json').activeNotes];
// const serverNotes = [];
const serverNotesIDs = [...require('./server-notes.json').activeNotes].map(
  ({ creationDate }) => creationDate
);
const notes = allNotes.filter(
  ({ creationDate }) => !serverNotesIDs.includes(creationDate)
);

/* console.log(allNotes.length);
console.log(
  [...new Set([...allNotes.map(({ creationDate }) => creationDate)])].length
); */

console.log(notes);
let counter = 0;

// eslint-disable-next-line no-unused-vars
const splitter = async () => {
  await fs.ensureDir('./projects/simple-note/parts/');
  while (notes.length) {
    counter += 1;
    fs.writeJsonSync(
      `./projects/simple-note/parts/notes-part-${
        counter < 10 ? `0${counter}` : counter
      }.json`,
      {
        activeNotes: notes.splice(0, 100),
        trashedNotes: [],
      },
      { spaces: 2 }
    );
  }
};

// splitter();
