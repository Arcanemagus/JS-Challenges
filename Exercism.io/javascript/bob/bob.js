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

const bob = new Bob;

bob.hey(''); // Fine. Be that way!
bob.hey('Bob, you suck.'); // Whatever
bob.hey('Bob, do you suck?'); // Sure.
bob.hey('BOB YOU SUCK'); // Whoa, chill out!
bob.hey('WOW! You suck.'); // Whatever
