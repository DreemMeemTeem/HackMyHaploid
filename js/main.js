var editor = new AminoEdit({
  element: document.getElementById('aminoedit'),
  basePairs: 'agcgcctacgctccccctacc',
  mutableNucleotideIndicies: [18, 19],
  events: {
    onRNAUpdate: function(sequence) {
      var mutableCodon = sequence.slice(sequence.length - 3, sequence.length).join('');
      console.log(mutableCodon)
    }
  }
});
