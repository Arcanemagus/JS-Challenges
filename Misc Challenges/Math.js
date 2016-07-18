// Rewrite Math.max
// Must accept unlimited params

function myMax(...input) {
  return input.reduce((pre, cur) => {
    if (cur > pre) {
      return cur;
    }
    return pre;
  }, 0);
}

// Rewrite Math.round
// Must be ES7 compliant https://tc39.github.io/ecma262/#sec-math.round
function myRound(num) {
  if (num % 1 === 0) { // whole
    return num;
  }
  if (num % 1 >= 0.5) { // round up
    return (num + 1) - (num % 1);
  }
  if (num % 1 < 0.5) { // round down
    return num - (num % 1);
  }
  if (isNaN(num)) { // is not a number
    return NaN;
  }
  if (!Number.isFinite(num)) { // is infinite
    return num;
  }
}
