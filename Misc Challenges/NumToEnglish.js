// Given a number from 0 - 999 ...convert to english...
// 2 ---two
// 87 --- eighty seven
function numToEng(inputNum) {
  let num = inputNum;
  const stringNumbers = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
    7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
    13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
    18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'fourty', 50: 'fifty',
    60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
  };

  if (num < 21) {
    return stringNumbers[num];
  }
  const output = [];
  if (num > 100) {
    const hundreds = Math.floor(num / 100);
    num -= hundreds * 100;
    output.push(`${stringNumbers[hundreds]} hundred`);
  }
  if (num > 10) {
    const tens = Math.floor(num / 10) * 10;
    num -= tens;
    output.push(stringNumbers[tens]);
  }
  if (num > 0) {
    output.push(stringNumbers[num]);
  }
  return output.join(' ');
}


console.log(numToEng('536'));
