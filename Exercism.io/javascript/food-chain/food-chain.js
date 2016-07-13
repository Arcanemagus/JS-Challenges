class FoodChain {
  verse(number) {
    const sing = [];
    let idx = number - 1;
    const animals = [
      {
        name: 'fly',
        onMention: '',
      },
      {
        name: 'spider',
        onSwallow: 'It wriggled and jiggled and tickled inside her.',
        onMention: ' that wriggled and jiggled and tickled inside her',
      },
      {
        name: 'bird',
        onSwallow: 'How absurd to swallow a bird!',
        onMention: '',
      },
      {
        name: 'cat',
        onSwallow: 'Imagine that, to swallow a cat!',
        onMention: '',
      },
      {
        name: 'dog',
        onSwallow: 'What a hog, to swallow a dog!',
        onMention: '',
      },
      {
        name: 'goat',
        onSwallow: 'Just opened her throat and swallowed a goat!',
        onMention: '',
      },
      {
        name: 'cow',
        onSwallow: "I don't know how she swallowed a cow!",
        onMention: '',
      },
      {
        name: 'horse',
        onSwallow: "She's dead, of course!\n",
      },
    ];

    sing.push(`I know an old lady who swallowed a ${animals[idx].name}.`);
    if (animals[idx].hasOwnProperty('onSwallow')) {
      sing.push(animals[idx].onSwallow);
    }
    if (idx === animals.length - 1) {
      // Horse, end it all!
      return sing.join('\n');
    }
    for (; idx > 0; idx--) {
      sing.push(`She swallowed the ${animals[idx].name}` +
        ` to catch the ${animals[idx - 1].name}${animals[idx - 1].onMention}.`);
    }
    sing.push(`I don't know why she swallowed the ${animals[idx].name}. ` +
      "Perhaps she'll die.");
    sing.push(''); // Empty newline on the end

    return sing.join('\n');
  }

  verses(first, last) {
    const song = [];
    for (let i = first; i <= last; i++) {
      song.push(this.verse(i));
    }
    song.push(''); // Empty newline on the end
    return song.join('\n');
  }
}

module.exports = FoodChain;
