// Have the function longestWord(sen) take the sen parameter being passed and
// return the largest word in the string. If there are two or more words that
// are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.

function longestWord(sen) {
  const regex = /(\w+)/g;
  let match;
  let longest = 0;
  let returnWord;
  while ((match = regex.exec(sen)) !== null) { // Linter doesn't like this
    if (match[1].length > longest) {
      longest = match[1].length;
      returnWord = match[1];
    }
  }
  return returnWord;
}

console.log(longestWord('meowwwww i am a kittycat!')); // meowwwww
