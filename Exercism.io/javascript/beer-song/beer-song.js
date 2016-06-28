class BeerSong {
  verse(num) {
    const lyrics = {
      bob: 'bottles of beer',
      otw: 'on the wall',
    };
    if (num < 1) {
      return `No more ${lyrics.bob} ${lyrics.otw}, no more ${lyrics.bob}.\n
Go to the store and buy some more, 99 ${lyrics.bob} ${lyrics.otw}.\n`;
    } else if (num === 1) {
      return `1 bottle of beer on the wall, 1 bottle of beer.\n
Take it down and pass it around, no more bottles of beer on the wall.\n`;
    }
    return `${num} ${lyrics.bob} ${lyrics.otw}, ${num} ${lyrics.bob}.\n
Take one down and pass it around, ${num - 1} ${lyrics.bob} ${lyrics.otw}.\n`;
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
const beersong = new BeerSong;

console.log(beersong.sing(8, 6));
console.log(beersong.verse(12));
