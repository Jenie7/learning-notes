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
# 
# Example:
# ------------------------------------------------ Start
# Summarize changes in around 50 characters or less
# 
# More detailed explanatory text, if necessary. Wrap it to about 72
# characters or so. In some contexts, the first line is treated as the
# subject of the commit and the rest of the text as the body. The
# blank line separating the summary from the body is critical (unless
# you omit the body entirely); various tools like \`log\`, \`shortlog\`
# and \`rebase\` can get confused if you run the two together.
# 
# Explain the problem that this commit is solving. Focus on why you
# are making this change as opposed to how (the code explains that).
# Are there side effects or other unintuitive consequences of this
# change? Here's the place to explain them.
# 
# Further paragraphs come after blank lines.
# 
#  - Bullet points are okay, too
# 
#  - Typically a hyphen or asterisk is used for the bullet, preceded
#    by a single space, with blank lines in between, but conventions
#    vary here
# 
# If you use an issue tracker, put references to them at the bottom,
# like this:
# 
# Resolves: #123
# ------------------------------------------------ End
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
