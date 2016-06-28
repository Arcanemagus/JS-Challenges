class BeerSong {
  verse(num) {
    const lyrics = {
      bob: 'bottles of beer',
      otw: 'on the wall',
      twd: 'Take it down and pass it around',
    };
    if (num < 1) {
      return `No more ${lyrics.bob} ${lyrics.otw}, no more ${lyrics.bob}.\n
Go to the store and buy some more, 99 ${lyrics.bob} ${lyrics.otw}.\n`;
    } else if (num === 1) {
      return `1 bottle of beer ${lyrics.otw}, 1 bottle of beer.\n
${lyrics.twd}, no more ${lyrics.bob} ${lyrics.otw}.\n`;
    }
    return `${num} ${lyrics.bob} ${lyrics.otw}, ${num} ${lyrics.bob}.\n
${lyrics.twd}, ${num - 1} ${lyrics.bob} ${lyrics.otw}.\n`;
  }
  sing(end, start = 0) {
    const toReturn = [];
    if (typeof end === 'number' && typeof start === 'number') {
      for (let i = end; i >= start; i--) {
        toReturn.push(this.verse(i));
      }
      return toReturn.join('');
    }
    return 'Not a number';
  }
}

module.exports = BeerSong;
