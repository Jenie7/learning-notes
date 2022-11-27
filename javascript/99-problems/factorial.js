function factorial(num) {
  if (num < 0) return undefined;
  if (num === 0) return 1;
  let x = num - 1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
}

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values
