class DnaTranscriber {
  toRna(dna) {
    return dna.split('').map(str => {
      switch (str) {
        case 'G':
          return 'C';
        case 'C':
          return 'G';
        case 'T':
          return 'A';
        case 'A':
          return 'U';
        default:
          throw new Error('Not a valid DNA sequence');
      }
    }).join('');
  }
}

const dnatranscriber = new DnaTranscriber;

dnatranscriber.toRna('G'); // C
dnatranscriber.toRna('ACGTGGTCTTAA'); // UGCACCAGAAUU
dnatranscriber.toRna('HELLO'); // Error: Not a valid DNA sequence
