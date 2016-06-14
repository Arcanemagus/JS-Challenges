// Leap Year Calcualtor
// If the year is divisible by 4 but not 100 it is a leap year.
// If the year is divisible by 4, 100, and 400 it is a leap year.

class Year {
  isLeap(year) {
    if (year % 100 === 0 && year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
      return true;
    }
    return false;
  }
}

const year = new Year;
console.log(year.isLeap(1600)); // True
console.log(year.isLeap(2000)); // True
console.log(year.isLeap(2400)); // True
console.log(year.isLeap(1700)); // False
console.log(year.isLeap(1800)); // False
console.log(year.isLeap(2600)); // False
