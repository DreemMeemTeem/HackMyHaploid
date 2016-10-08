var editor = new AminoEdit({
  element: document.getElementById('aminoedit'),
  //basePairs: ['A', 'T', 'T', 'C', 'G', 'C', 'A', 'G'],
  basePairs: 'agcgcctacgctccccctacc',
  mutableNucleotideIndicies: [18, 19]
});