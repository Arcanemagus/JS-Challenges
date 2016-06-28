class Gigasecond {
  constructor(bday) {
    this.bday = bday;
  }
  date() {
    const gigaSec = Math.pow(10, 9);
    const bdayInSec = this.bday.getTime() / 1000;
    const gigaVersary = (bdayInSec + gigaSec) * 1000;
    const final = new Date(gigaVersary);
    return final;
  }
}

module.exports = Gigasecond;
