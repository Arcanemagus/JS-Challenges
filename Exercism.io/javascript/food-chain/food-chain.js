class FoodChain {
  verse(number) {
    let i = number - 1; // Iterator
    const sing = [];
    const animals = [
      {
        name: 'fly',
        mentioned: '',
      },
      {
        name: 'spider',
        swallowed: 'It wriggled and jiggled and tickled inside her.',
        mentioned: ' that wriggled and jiggled and tickled inside her',
      },
      {
        name: 'bird',
        swallowed: 'How absurd to swallow a bird!',
        mentioned: '',
      },
      {
        name: 'cat',
        swallowed: 'Imagine that, to swallow a cat!',
        mentioned: '',
      },
      {
        name: 'dog',
        swallowed: 'What a hog, to swallow a dog!',
        mentioned: '',
      },
      {
        name: 'goat',
        swallowed: 'Just opened her throat and swallowed a goat!',
        mentioned: '',
      },
      {
        name: 'cow',
        swallowed: "I don't know how she swallowed a cow!",
        mentioned: '',
      },
      {
        name: 'horse',
        swallowed: "She's dead, of course!\n",
        mentioned: '',
      },
    ];
    // Push first line
    sing.push(`I know an old lady who swallowed a ${animals[i].name}.`);
    // If animal has a "swallowed" key
    if (animals[i].hasOwnProperty('swallowed')) {
      sing.push(animals[i].swallowed);
    }
    // If the last animal
    if (i === animals.length - 1) {
      return sing.join('\n');
    }
    // Loop through to create the rest of the song
    for (; i > 0; i--) {
      sing.push(`She swallowed the ${animals[i].name}` +
        ` to catch the ${animals[i - 1].name}${animals[i - 1].mentioned}.`);
    }
    // Push the last line
    sing.push(`I don't know why she swallowed the ${animals[i].name}. ` +
      "Perhaps she'll die.\n");
    // Return the final song
    return sing.join('\n');
  }
  verses(start, end) {
    const sing = [];
    // Make sure params are numbers
    if (typeof end !== 'number' || typeof start !== 'number') {
      throw new Error('Not a number');
    }
    for (let i = start; i <= end; i++) {
      sing.push(this.verse(i));
    }
    return `${sing.join('\n')}\n`;
  }
}

module.exports = FoodChain;
