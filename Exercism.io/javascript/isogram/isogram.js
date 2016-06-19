class Isogram {
  isIsogram(word) {
    if (word.match(/(.).*\1/)) {
      return true;
    }
    return false;
  }
}

const isogram = new Isogram;

isogram.isIsogram('hey'); // false
isogram.isIsogram('hello'); // true
