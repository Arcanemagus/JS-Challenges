const FoodChain = require('./food-chain');

describe('Food Chain', () => {
  const song = new FoodChain();

  it('fly', () => {
    const expected = 'I know an old lady who swallowed a fly.\n' +
      "I don't know why she swallowed the fly. Perhaps she'll die.\n";

    expect(song.verse(1)).toEqual(expected);
  });

  it('spider', () => {
    const expected = 'I know an old lady who swallowed a spider.\n' +
      'It wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      "I don't know why she swallowed the fly. Perhaps she'll die.\n";

    expect(song.verse(2)).toEqual(expected);
  });

  it('bird', () => {
    const expected = 'I know an old lady who swallowed a bird.\n' +
      'How absurd to swallow a bird!\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled ' +
        'and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      "I don't know why she swallowed the fly. Perhaps she'll die.\n";

    expect(song.verse(3)).toEqual(expected);
  });

  it('cat', () => {
    const expected = 'I know an old lady who swallowed a cat.\n' +
      'Imagine that, to swallow a cat!\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled ' +
        'and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      "I don't know why she swallowed the fly. " +
      "Perhaps she'll die.\n";

    expect(song.verse(4)).toEqual(expected);
  });

  it('dog', () => {
    const expected = 'I know an old lady who swallowed a dog.\n' +
      'What a hog, to swallow a dog!\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled ' +
        'and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      "I don't know why she swallowed the fly. " +
      "Perhaps she'll die.\n";

    expect(song.verse(5)).toEqual(expected);
  });

  it('goat', () => {
    const expected = 'I know an old lady who swallowed a goat.\n' +
      'Just opened her throat and swallowed a goat!\n' +
      'She swallowed the goat to catch the dog.\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled ' +
        'and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      "I don't know why she swallowed the fly. " +
      "Perhaps she'll die.\n";

    expect(song.verse(6)).toEqual(expected);
  });

  it('cow', () => {
    const expected = 'I know an old lady who swallowed a cow.\n' +
      "I don't know how she swallowed a cow!\n" +
      'She swallowed the cow to catch the goat.\n' +
      'She swallowed the goat to catch the dog.\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled ' +
        'and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      "I don't know why she swallowed the fly. " +
      "Perhaps she'll die.\n";

    expect(song.verse(7)).toEqual(expected);
  });

  it('horse', () => {
    const expected = 'I know an old lady who swallowed a horse.\n' +
      "She's dead, of course!\n";

    expect(song.verse(8)).toEqual(expected);
  });

  it('multiple verses', () => {
    let expected = '';

    expected += 'I know an old lady who swallowed a fly.\n' +
      "I don't know why she swallowed the fly. Perhaps she'll die.\n\n";
    expected += 'I know an old lady who swallowed a spider.\n' +
      'It wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      "I don't know why she swallowed the fly. Perhaps she'll die.\n\n";

    expect(song.verses(1, 2)).toEqual(expected);
  });

  it('the whole song', () => {
    let expected = '';

    expected += 'I know an old lady who swallowed a fly.\n' +
      "I don't know why she swallowed the fly. Perhaps she'll die.\n\n";
    expected += 'I know an old lady who swallowed a spider.\n' +
      'It wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    "I don't know why she swallowed the fly. Perhaps she'll die.\n\n";
    expected += 'I know an old lady who swallowed a bird.\n' +
    'How absurd to swallow a bird!\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and ' +
      'tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    "I don't know why she swallowed the fly. Perhaps she'll die.\n\n";
    expected += 'I know an old lady who swallowed a cat.\n' +
    'Imagine that, to swallow a cat!\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and ' +
      'tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    "I don't know why she swallowed the fly. " +
    "Perhaps she'll die.\n\n";
    expected += 'I know an old lady who swallowed a dog.\n' +
    'What a hog, to swallow a dog!\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and ' +
      'tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    "I don't know why she swallowed the fly. " +
    "Perhaps she'll die.\n\n";
    expected += 'I know an old lady who swallowed a goat.\n' +
    'Just opened her throat and swallowed a goat!\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and ' +
      'tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    "I don't know why she swallowed the fly. " +
    "Perhaps she'll die.\n\n";
    expected += 'I know an old lady who swallowed a cow.\n' +
    'I don\'t know how she swallowed a cow!\n' +
    'She swallowed the cow to catch the goat.\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and ' +
      'tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    "I don't know why she swallowed the fly. " +
    "Perhaps she'll die.\n\n";
    expected += 'I know an old lady who swallowed a horse.\n' +
      "She's dead, of course!\n\n";

    expect(song.verses(1, 8)).toEqual(expected);
  });
});
