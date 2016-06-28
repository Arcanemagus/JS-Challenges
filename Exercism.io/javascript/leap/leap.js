// Leap Year Calcualtor
// If the year is divisible by 4 but not 100 it is a leap year.
// If the year is divisible by 4, 100, and 400 it is a leap year.

class Year {
  isLeap(year) {
    return year % 100 === 0 && year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
}

module.exports = Year;
