function letterChanges(str) {
  const strNumArr = [];

  for (let i = 0; i < str.length; i++) {
    strNumArr.push(str.charCodeAt(i));
  }
// 65 90 A - Z
// 97 122 a - z

  let newStr = '';

  // Array of all vowels
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];
  newStr = strNumArr.reduce((prev, curr) => {
    if (curr >= 65 && curr <= 90 || curr >= 97 && curr <= 121) {
      curr += 1;
    } else if (curr === 122) {
      curr -= 25;
    }
    let tranStr = String.fromCharCode(curr);
    // Check to see if vowel...then
    if (vowelArr.includes(tranStr)) tranStr = tranStr.toUpperCase();
    return prev + tranStr;
  }, '');
  // console.log(newStr);
  return newStr;
}

console.log(letterChanges('fun times!'));
