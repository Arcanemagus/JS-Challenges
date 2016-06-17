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

const gs = new Gigasecond(new Date(Date.UTC(1959, 6, 19, 5, 13, 45))); // pre-epoch test

gs.date(); // 1991-03-27
