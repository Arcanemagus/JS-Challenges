class Bob {
  static isYelling(msg) {
    let isYelling = !!msg.length;
    if (isYelling) {
      for (let i = 0, length = msg.length; i < length; i++) {
        const character = msg.substr(i, 1);
        if (character.toLowerCase() === character.toUpperCase()) {
          continue; // tests if not a letter
        }
        isYelling = character === character.toUpperCase();
        if (!isYelling) {
          break; // not yelling
        }
      }
    }
    return isYelling;
  }
  hey(msg) {
    if (msg === undefined || msg === '') {
      return 'Fine. Be that way!';
    } else if (msg.includes('?')) {
      return 'Sure.';
    } else if (Bob.isYelling(msg)) {
      return 'Whoa, chill out!';
    }
    return 'Whatever.';
  }
}

module.exports = Bob;
