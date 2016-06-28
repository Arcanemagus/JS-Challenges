class Isogram {
  isIsogram(word) {
    return word.match(/(.).*\1/);
  }
}

module.exports = Isogram;
