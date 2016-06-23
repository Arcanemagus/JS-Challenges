// Given a number from 0 - 999 ...convert to english...
// 2 ---two
// 87 --- eighty seven

function numToEng(numStr) {
  const sinDigits = ['zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'];
  const dblDigits = ['ten', 'eleven', 'twelve', 'thirteen',
  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
  'nineteen', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty',
  'seventy', 'eighty', 'ninety'];
  if (numStr.length === 1) {
    const currNum = parseInt(numStr, 10);
    const newNum = sinDigits[currNum];
    console.log(newNum);
  } else if (numStr.length === 2 && parseInt(numStr, 10) <= 20) {
    const currNum = parseInt(numStr, 10);
    const newNum = dblDigits[currNum - 10];
    console.log(newNum);
  } else if (numStr.length === 2 && parseInt(numStr, 10) > 20) {
    const currNum = numStr.split('');
    const newNum = currNum[0];
    const newNum2 = currNum[1];
    switch (newNum) {
      case '2':
        console.log(`${dblDigits[10]} ${sinDigits[newNum2]}`);
        break;
      case '3':
        console.log(`${dblDigits[11]} ${sinDigits[newNum2]}`);
        break;
      case '4':
        console.log(`${dblDigits[12]} ${sinDigits[newNum2]}`);
        break;
      case '5':
        console.log(`${dblDigits[13]} ${sinDigits[newNum2]}`);
        break;
      case '6':
        console.log(`${dblDigits[14]} ${sinDigits[newNum2]}`);
        break;
      case '7':
        console.log(`${dblDigits[15]} ${sinDigits[newNum2]}`);
        break;
      case '8':
        console.log(`${dblDigits[16]} ${sinDigits[newNum2]}`);
        break;
      case '9':
        console.log(`${dblDigits[17]} ${sinDigits[newNum2]}`);
        break;
      default:
        console.log('An Error Occured');
    }
  }
}
numToEng('77');
