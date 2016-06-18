class Words {
  count(string) {
    const map = {};
    const words = Words.extractWords(string);
    for (let i = 0, length = words.length, word; i < length; ++i) {
      word = words[i];
      if (map[word]) {
        map[word]++;
      } else {
        map[word] = 1;
      }
    }
    return map;
  }
  static extractWords(chunk) {
    // Leave out the question marks and that kinda stuff and extract words only
    const matches = [];
    const regex = /(\w+)/g;
    let match;
    while ((match = regex.exec(chunk)) !== null) {
      matches.push(match[1]);
    }
    return matches;
  }
}

const words = new Words;
words.count('olly olly in come free');
