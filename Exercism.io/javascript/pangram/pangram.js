class Pangram {
  isPangram(str) {
    const alphaSet = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
    const newSet = new Set();
    for (let i = 0, length = str.length; i < length; i++) {
      const char = str.substr(i, 1);
      if (!alphaSet.has(char)) continue;
      newSet.add(char);
    }
    if (newSet.size !== alphaSet.size) {
      return false;
    }
    for (const entry of alphaSet) {
      if (!newSet.has(entry)) return false;
    }
    return true;
  }
}

const pangram = new Pangram;

pangram.isPangram('the quick brown fox jumps over the lazy dog'); // true
pangram.isPangram('there is a frightening zerba in the xray room'); // false
