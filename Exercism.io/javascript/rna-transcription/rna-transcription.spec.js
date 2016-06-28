const DnaTranscriber = require('./rna-transcription');
const dnaTranscriber = new DnaTranscriber();

describe('toRna()', () => {
  it('transcribes cytosine to guanine', () => {
    expect(dnaTranscriber.toRna('C')).toBe('G');
  });

  it('transcribes guanine to cytosine', () => {
    expect(dnaTranscriber.toRna('G')).toBe('C');
  });

  it('transcribes adenine to uracil', () => {
    expect(dnaTranscriber.toRna('A')).toBe('U');
  });

  it('transcribes thymine to adenine', () => {
    expect(dnaTranscriber.toRna('T')).toBe('A');
  });

  it('transcribes all dna nucleotides to their rna complements', () => {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA')).toBe('UGCACCAGAAUU');
  });
});
