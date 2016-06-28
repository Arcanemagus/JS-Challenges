class PhoneNumber {
  number(num) {
    const numArr = num.split('');
    const retNum = [];
    if (numArr[0] === '1') {
      for (let i = 0, length = numArr.length; i < length; i++) {
        if (isNaN(parseInt(numArr[i], 10))) {
          continue;
        } else {
          retNum.push(numArr[i]);
        }
      }
      if (retNum.length === 11) {
        return retNum.join('');
      }
    }
    return '0000000000';
  }
  areaCode(num) {
    const cleanNum = this.number(num);
    const areaCode = cleanNum.substr(1, 3);
    if (areaCode !== '000') {
      return areaCode;
    }
    return 'Invalid Phone Number';
  }
  toString(num) {
    const newNum = ['('];
    if (num.substr(0, 1) !== '1' || isNaN(num.substr(1))) {
      return 'Invalid Phone Number';
    }
    newNum.push(num.substr(1, 3), ') ', num.substr(4, 3), '-', num.substr(7));
    return newNum.join('');
  }
}


const phone = new PhoneNumber;

console.log(phone.number('1-484-954-4521')); // 14849544521
console.log(phone.toString('12345678901')); // (234) 567-8901
console.log(phone.areaCode('1-974-514-6658')); // 974
