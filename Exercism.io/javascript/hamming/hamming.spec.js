const Hamming = require('./hamming');

describe('Hamming', () => {
  const hamming = new Hamming();

  it('no difference between identical strands', () => {
    expect(hamming.compute('A', 'A')).toBe(0);
  });

  it('complete hamming distance for single nucleotide strand', () => {
    expect(hamming.compute('A', 'G')).toBe(1);
  });

  it('complete hamming distance for small strand', () => {
    expect(hamming.compute('AG', 'CT')).toBe(2);
  });

  it('small hamming distance', () => {
    expect(hamming.compute('AT', 'CT')).toBe(1);
  });

  it('small hamming distance in longer strand', () => {
    expect(hamming.compute('GGACG', 'GGTCG')).toBe(1);
  });

  it('large hamming distance', () => {
    expect(hamming.compute('GATACA', 'GCATAA')).toBe(4);
  });

  it('hamming distance in very long strand', () => {
    expect(hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT')).toBe(9);
  });

  it('throws error when strands are not equal length', () => {
    expect(() => { hamming.compute('GGACGGATTCTG', 'AGGAC'); }).toThrow(
      new Error('DNA strands must be of equal length.')
    );
  });
});
