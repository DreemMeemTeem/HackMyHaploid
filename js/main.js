

var editor = new AminoEdit({
  element: document.getElementById('aminoedit'),
  //basePairs: ['A', 'T', 'T', 'C', 'G', 'C', 'A', 'G'],
  basePairs: 'agcgcctacgctccccctacc',
  mutableNucleotideIndicies: [18, 19],
  events: {
    onAminoUpdate: function(sequence) {
      var mutableCodon = sequence[sequence.length - 1];
      var imgP;
      switch(mutableCodon){
          case "UGG":
            imgP="";
            break;
          case "AGG":
            imgP="";
            break;
          case "CGG":
            imgP="";
            break;
          case "GGG":
            imgP="";
            break;
          case "UCG":
            imgP="";
            break;
          case "UAG":
            imgP="";
            break;
          case "UUG":
            imgP="";
            break;
      }
      console.log(mutableCodon)
    }
  }
});