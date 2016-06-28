const Bob = require('./bob.js');

describe('Bob', () => {
  const bob = new Bob();

  it('stating something', () => {
    const result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toBe('Whatever.');
  });

  it('shouting', () => {
    const result = bob.hey('WATCH OUT!');
    expect(result).toBe('Whoa, chill out!');
  });

  it('asking a question', () => {
    const result = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(result).toBe('Sure.');
  });

  it('talking forcefully', () => {
    const result = bob.hey('Let\'s go make out behind the gym!');
    expect(result).toBe('Whatever.');
  });

  it('using acronyms in regular speech', () => {
    const result = bob.hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toBe('Whatever.');
  });

  it('forceful questions', () => {
    const result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toBe('Whoa, chill out!');
  });

  it('shouting numbers', () => {
    const result = bob.hey('1, 2, 3 GO!');
    expect(result).toBe('Whoa, chill out!');
  });

  it('only numbers', () => {
    const result = bob.hey('1, 2, 3');
    expect(result).toBe('Whatever.');
  });

  it('question with only numbers', () => {
    const result = bob.hey('4?');
    expect(result).toBe('Sure.');
  });

  it('shouting with special characters', () => {
    const result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toBe('Whoa, chill out!');
  });

  it('shouting with umlauts', () => {
    /* NOTE: \xc4 = Ä
             \xe4 = ä
             \xdc = Ü
             \xfc = ü
       "\xfcML\xe4\xdcTS" === "üMLäÜTS"
    */

    const result = bob.hey('\xdcML\xc4\xdcTS!');
    expect(result).toBe('Whoa, chill out!');
  });

  it('calmly speaking about umlauts', () => {
    const result = bob.hey('\xfcML\xe4\xdcTS');
    expect(result).toBe('Whatever.');
  });

  it('shouting with no exclamation mark', () => {
    const result = bob.hey('I HATE YOU');
    expect(result).toBe('Whoa, chill out!');
  });

  it('statement containing question mark', () => {
    const result = bob.hey('Ending with a ? means a question.');
    expect(result).toBe('Whatever.');
  });

  it('prattling on', () => {
    const result = bob.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toBe('Sure.');
  });

  it('silence', () => {
    const result = bob.hey('');
    expect(result).toBe('Fine. Be that way!');
  });

  it('prolonged silence', () => {
    const result = bob.hey('   ');
    expect(result).toBe('Fine. Be that way!');
  });
});
