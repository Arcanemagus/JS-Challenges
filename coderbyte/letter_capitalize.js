// For this challenge you will be capitalizing certain
// characters in a string.

function letterCapitalize(str) {
  const chunks = str.split(' ');
  const output = [];
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i];
    if (chunk.charAt(0) !== chunk.charAt(0).toUpperCase()) {
      chunk = chunk.charAt(0).toUpperCase() + chunk.substr(1);
    }
    output.push(chunk);
  }
  return output.join(' ');
}

console.log(letterCapitalize('hello world'));
