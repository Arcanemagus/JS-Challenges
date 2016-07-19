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
  if (isNaN(num)) { // is not a number
    return NaN;
  }
  if (!Number.isFinite(num)) { // is infinite
    return num;
  }
  if (num % 1 === 0) { // whole
    return num;
  }
  let returnNum = parseInt(num, 10); // strip decimal value
  const remainder = num % 1;
  if (num < 0 && remainder < -0.5) {
    returnNum--;
  } else if (num > 0 && remainder >= 0.5) {
    returnNum++;
  }
  // Javascript sucks at floats - below doesn't always work (ie: 3.6 > 3.99999...)
  // if (num % 1 >= 0.5) { // round up
  //   return (num + 1) - (num % 1);
  // }
  // if (num % 1 < 0.5) { // round down
  //   return num - (num % 1);
  // }
  return returnNum;
}

// Rewrite Math.ceil
// Must be ES7 compliant https://tc39.github.io/ecma262/#sec-math.ceil
function myCeil(num) {
  if (isNaN(num)) { // is not a number
    return NaN;
  }
  if (!Number.isFinite(num)) { // is infinite
    return num;
  }
  let returnNum = parseInt(num, 10); // strip decimal value
  const remainder = num % 1;
  if (remainder > 0) {
    returnNum++;
  }
  return returnNum;
}

// Rewrite Math.floor
// Must be ES7 compliant https://tc39.github.io/ecma262/#sec-math.floor

function myFloor(num) {
  if (isNaN(num)) { // is not a number
    return NaN;
  }
  if (!Number.isFinite(num)) { // is infinite
    return num;
  }
  let returnNum = parseInt(num, 10); // strip decimal value
  if (num < 0 && num % 1 < 0) { // handle negatives
    returnNum--;
  }
  return returnNum;
}
console.log(myFloor(4.8));
