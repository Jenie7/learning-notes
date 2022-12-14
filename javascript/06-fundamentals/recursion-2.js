/**
 * Nader's great recursion analogy
 * https://youtu.be/fSh_WXNI5BQ?t=2847
 *
 *
 * L1                 3
 * ----------L---------------R----------
 * L2        2      ...      5
 * -------L----R---------------R--------
 * L3     4    1    ...        1
 *
 */

const callStackMap = new Map();
// callStackMap.set('x', 1);
let counter = 0;

const mine = {
  gold: 3,
  left: {
    gold: 2,
    left: { gold: 4 },
    right: { gold: 1 },
  },
  right: {
    gold: 5,
    right: { gold: 1 },
  },
};

function countGold(branch) {
  counter += 1;
  callStackMap.set(branch, counter);
  console.log(`Stack #${callStackMap.get(branch)}`);

  // console.log(JSON.stringify(branch, null, '\t'));
  let branchGold = branch.gold;

  // Base case
  if (!branch.left && !branch.right) {
    console.log(
      `Branch's gold (dead end): ${branchGold}`,
      `// Stack #${callStackMap.get(branch)}`
    );
    return branchGold;
  }

  // Recursive case
  if (branch.left) {
    branchGold += countGold(branch.left);
  }

  // Recursive case
  if (branch.right) {
    branchGold += countGold(branch.right);
  }

  console.log(
    `Branch's gold: ${branchGold}`,
    `// Stack #${callStackMap.get(branch)}`
  );
  return branchGold;
}

const gold = countGold(mine);
console.log('');
console.log(`Total gold: ${gold}`);

// console.log(callStackMap);
// console.log([...callStackMap.entries()]);
// console.log([...callStackMap.keys()]);
// console.log([...callStackMap.values()]);
