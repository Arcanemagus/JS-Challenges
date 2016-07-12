class Pangram {
  constructor(str) {
    this.str = str;
  }
  isPangram() {
    const alphaSet = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
    const newSet = new Set();
    for (let i = 0, length = this.str.length; i < length; i++) {
      const char = this.str.substr(i, 1);
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

module.exports = Pangram;

const pangram = new Pangram('"Five quacking Zephyrs jolt my wax bed."');
console.log(pangram.isPangram());
