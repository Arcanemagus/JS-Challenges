// For this challenge you will be adding up all the numbers from
// 1 to a certain argument.

function simpleAdd(end) {
  let sum = 0;
  for (let i = end; i >= 1; i--) {
    sum += i;
  }
  return sum;
}
console.log(simpleAdd(8));
