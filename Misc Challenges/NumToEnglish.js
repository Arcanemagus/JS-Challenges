// Given a number from 0 - 999 ...convert to english...
// 2 ---two
// 87 --- eighty seven
function numToEng(num) {
  const stringNumbers = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six',
    7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve',
    13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
    18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'fourty', 50: 'fifty',
    60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
  };

  if (num < 21) {
    return stringNumbers[num];
  } else if (num < 100) {
    const tens = Math.floor(num / 10);
    if (num - (tens * 10) === 0) {
      return stringNumbers[num];
    }
    return `${stringNumbers[tens * 10]} ${stringNumbers[num - tens * 10]}`;
  } else if (num > 99) {
    const hundred = Math.floor(num / 100);
    if (num - (hundred * 100) === 0) {
      return `${stringNumbers[hundred]} hundred`;
    }
    return `${stringNumbers[hundred]} hundred ${numToEng(num - (hundred * 100))}`;
  }
  return 'Invalid Input';
}

console.log(numToEng('123'));
