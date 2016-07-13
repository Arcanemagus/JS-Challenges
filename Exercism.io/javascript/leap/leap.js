// Leap Year Calcualtor
// If the year is divisible by 4 but not 100 it is a leap year.
// If the year is divisible by 4, 100, and 400 it is a leap year.

class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    return (this.year % 100 === 0 && this.year % 400 === 0) ||
    (this.year % 4 === 0 && this.year % 100 !== 0);
  }
}

module.exports = Year;
