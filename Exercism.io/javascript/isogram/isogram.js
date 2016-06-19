class Isogram {
  isIsogram(word) {
    return word.match(/(.).*\1/);
  }
}

const isogram = new Isogram;

isogram.isIsogram('hey'); // false
isogram.isIsogram('hello'); // true
