const Isogram = require('./isogram');

describe('Isogram Test Suite', () => {
  it('duplicates', () => {
    const word = new Isogram('duplicates');

    expect(word.isIsogram()).toBe(true);
  });

  it('eleven', () => {
    const word = new Isogram('eleven');

    expect(word.isIsogram()).toBe(false);
  });

  it('subdermatoglyphic', () => {
    const word = new Isogram('subdermatoglyphic');

    expect(word.isIsogram()).toBe(true);
  });

  it('Alphabet', () => {
    const word = new Isogram('Alphabet');

    expect(word.isIsogram()).toBe(false);
  });

  it('thumbscrew-japingly', () => {
    const word = new Isogram('thumbscrew-japingly');

    expect(word.isIsogram()).toBe(true);
  });

  it('Hjelmqvist-Gryb-Zock-Pfund-Wax', () => {
    const word = new Isogram('Hjelmqvist-Gryb-Zock-Pfund-Wax');

    expect(word.isIsogram()).toBe(true);
  });

  it('Heizölrückstoßabdämpfung', () => {
    const word = new Isogram('Heizölrückstoßabdämpfung');

    expect(word.isIsogram()).toBe(true);
  });

  it('the quick brown fox', () => {
    const word = new Isogram('the quick brown fox');

    expect(word.isIsogram()).toBe(false);
  });

  it('Emily Jung Schwartzkopf', () => {
    const word = new Isogram('Emily Jung Schwartzkopf');

    expect(word.isIsogram()).toBe(true);
  });
});
