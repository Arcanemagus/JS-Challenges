class Anagram {
  constructor(anagram) {
    this.anagram = anagram.toLowerCase();
  }
  matches(...parameters) {
    return [].concat(...parameters).map(givenWord => {
      const word = givenWord.toLowerCase();
      if (word === this.anagram) {
        return false;
      }
      const matchWith = this.anagram.split('');
      // const currentWord = word.split('');
      for (const char of word) {
        const index = matchWith.indexOf(char);
        if (index === -1) {
          return false;
        }
        matchWith.splice(index, 1);
      }
      return matchWith.length === 0 ? word : false;
    }).filter(i => i);
  }
}
const anagram = new Anagram('Orchestra');
console.log(anagram.matches(['cashregister', 'Carthorse', 'radishes']));
