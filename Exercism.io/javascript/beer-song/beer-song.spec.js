const BeerSong = require('./beer-song');

describe('BeerSong', () => {
  const song = new BeerSong();

  it('prints an arbitrary verse', () => {
    const expected = '8 bottles of beer on the wall, 8 bottles of beer.\n' +
      'Take one down and pass it around, 7 bottles of beer on the wall.\n';
    expect(song.verse(8)).toBe(expected);
  });

  it('handles 1 bottle', () => {
    const expected = '1 bottle of beer on the wall, 1 bottle of beer.\n' +
      'Take it down and pass it around, no more bottles of beer on the wall.\n';
    expect(song.verse(1)).toBe(expected);
  });

  it('handles 0 bottles', () => {
    const expected = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
      'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(song.verse(0)).toBe(expected);
  });

  it('sings several verses', () => {
    const expected = '8 bottles of beer on the wall, 8 bottles of beer.\n' +
      'Take one down and pass it around, 7 bottles of beer on the wall.\n\n' +
      '7 bottles of beer on the wall, 7 bottles of beer.\n' +
      'Take one down and pass it around, 6 bottles of beer on the wall.\n\n' +
      '6 bottles of beer on the wall, 6 bottles of beer.\n' +
      'Take one down and pass it around, 5 bottles of beer on the wall.\n';
    expect(song.sing(8, 6)).toBe(expected);
  });

  it('sings the rest of the verses', () => {
    const expected = '3 bottles of beer on the wall, 3 bottles of beer.\n' +
    'Take one down and pass it around, 2 bottles of beer on the wall.\n\n' +
    '2 bottles of beer on the wall, 2 bottles of beer.\n' +
    'Take one down and pass it around, 1 bottle of beer on the wall.\n\n' +
    '1 bottle of beer on the wall, 1 bottle of beer.\n' +
    'Take it down and pass it around, no more bottles of beer on the wall.\n\n' +
    'No more bottles of beer on the wall, no more bottles of beer.\n' +
    'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
    expect(song.sing(3)).toBe(expected);
  });
});
