class Hamming {
  compute(str1, str2) {
    let distance = 0;
    const str1Arr = str1.split('');
    const str2Arr = str2.split('');
    if (str1.length !== str2.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    if (str1 === str2) {
      return 0;
    }
    for (let i = 0, length = str1.length; i < length; i++) {
      if (str1Arr[i] !== str2Arr[i]) {
        distance++;
      }
    }
    return distance;
  }
}

const hamming = new Hamming;

hamming.compute('A', 'A'); // 0
hamming.compute('A', 'G'); // 1
hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT'); // 9
hamming.compute('GGACGGATTCTG', 'AGGAC'); // Error: DNA strands must be of equal length.
