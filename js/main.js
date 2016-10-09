var indicator = new ProteinIndicator({
  element: $('#proteinindicator'),
  imageSrc: './img/p53.png'
});

var editor = new AminoEdit({
  element: $('#aminoedit'),
  basePairs: 'agcgcctacgctccccctacc',
  mutableNucleotideIndicies: [18, 19],
  events: {
    onRNAUpdate: function(sequence) {
      var mutableCodon = sequence.slice(sequence.length - 3).join('');
      indicator.updateDisplay(mutableCodon);
    }
  }
});

var cell = new CellAnimation({
  element: $('#cellanimation'),
  sprites: {
    healthy: './img/cell-healthy.png',
    cancerous: './img/cell-cancerous.png',
    virus: './img/virus.png'
  }
});

$('#proteininject').click(function() {
  var sequence = editor.currentRNASequence;
  var codon = editor.currentRNASequence.slice(editor.currentRNASequence.length - 3).join('');
  
  if (codon === 'UGG') {
    cell.changeState('healthy');
  } else {
    cell.changeState('cancerous');
  }
})