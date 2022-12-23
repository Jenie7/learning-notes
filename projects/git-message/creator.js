/**
 * Gitmoji
 * An emoji guide for your commit messages.
 *
 * https://gitmoji.dev/
 *
 * Source files
 * https://github.com/carloscuesta/gitmoji/edit/master/packages/gitmojis/src/
 *
 * https://gist.github.com/lisawolderiksen/a7b99d94c92c6671181611be1641c733
 * https://github.com/carloscuesta/gitmoji/issues/455
 */

const fs = require('fs-extra');
const { gitmojis } = require('./gitmojis.json');

let template = `
# How to Write a Git Commit Message:
# https://chris.beams.io/posts/git-commit/
#
# 1. Separate subject from body with a blank line
# 2. Limit the subject line to 50 characters
# 3. Capitalize the subject line
# 4. Do not end the subject line with a period
# 5. Use the imperative mood in the subject line
# 6. Wrap the body at 72 characters
# 7. Use the body to explain what and why vs. how
`;

template += `#
# gitmoji!
# https://gitmoji.carloscuesta.me
#
`;

template += gitmojis
  .map(({ code, description }) => {
    return `# ${code} ${description}`;
  })
  .join('\n');

template += `\n#`;

fs.writeFileSync(`${__dirname}/.gitmessage`, template);
