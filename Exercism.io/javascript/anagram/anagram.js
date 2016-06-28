class Anagram {
  constructor(word) {
    this.word = word;
    this.charList = {};
    for (let char of word) {
      char = char.toLocaleLowerCase();
      if (!this.charList.hasOwnProperty(char)) {
        // Add an object for that character, starting the source count at 1
        this.charList[char] = { word: 1, test: 0 };
      } else {
        // Increment the source count
        this.charList[char].word++;
      }
    }
  }

  clearTest() {
    // Clears the sums of the test character
    Object.keys(this.charList).forEach(char => (this.charList[char].test = 0));
  }

  isAnagramOf(test) {
    // Ensure a clean slate
    this.clearTest();

    // Some base tests
    if (test.toLocaleLowerCase() === this.word.toLocaleLowerCase()) {
      // They are the same (lowercase) word
      return false;
    }
    if (test.length !== this.word.length) {
      // The words aren't the same length, we can exit early
      return false;
    }

    // Flag for whether a bad character was found in a callback
    let badChar = false;

    // Sum the counts for each character in the test string
    for (let char of test) {
      char = char.toLocaleLowerCase();
      if (!this.charList.hasOwnProperty(char)) {
        // If the test has a character not in the source, it's not an anagram
        badChar = true;
      } else {
        // Increment the test count for this character
        this.charList[char].test++;
      }
    }

    // Verify each character appears exactly the same number of times in both strings
    Object.keys(this.charList).forEach(char => {
      if (this.charList[char].word !== this.charList[char].test) {
        badChar = true;
      }
    });

    // Return whether or not a bad character was found
    return badChar !== true;
  }

  matches(list, ...theRest) {
    let toCheck;
    // Ensure the argument(s) are transformed to an Array
    /**
     * Note: This doesn't exactly follow the specs in that you can send
     * _anything_ that has a .toString() method into here and it will work,
     * not just strings.
     */
    if (!Array.isArray(list)) {
      // Attempt to convert the first argument to a string
      toCheck = [list.toString()];
      // Convert and add any remaining arguments
      theRest.forEach(arg => toCheck.push(arg.toString()));
    } else {
      toCheck = list;
    }

    return toCheck.filter(elem => this.isAnagramOf(elem));
  }
}

module.exports = Anagram;
