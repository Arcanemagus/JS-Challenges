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
    let match = regex.exec(chunk);
    while (match !== null) {
      matches.push(match[1]);
      match = regex.exec(chunk);
    }
    return matches;
  }
}

module.exports = Words;
