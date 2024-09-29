function dnaStrand(dna) {
  const DNAComplements = {
    'T': 'A',
    'A': 'T',
    'C': 'G',
    'G': 'C',
  };

  const resultArr = [];

  for (let i = 0; i < dna.length; i++) {
    resultArr.push(DNAComplements[dna[i]]);
  }

  return resultArr.join('');
}

dnaStrand('ATTGC');

/**
 * Лучшее решение:
  function DNAStrand(dna) {
      return dna.replace(/./g, function(c) {
          return DNAStrand.pairs[c]
      })
  }

  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }
 */