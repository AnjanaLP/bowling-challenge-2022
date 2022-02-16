$(document).ready(function() {
  var game = new Game();

  $('#calculate-score').click(function() {
    filterInputs();
    updateScore();
  });

  $('#reset-game').click(function() {
    game = new Game();
    resetRunningTotals();
    resetInputValues();
  });

  function updateScore() {
    for (let i = 0; i < 10; i++) {
      $(`#frame-${i+1}-score`).text(game.runningTotalScore()[i]);
    }
    $('#frame-10-score').css('color', 'red');
  };

  function filterInputs() {
    let inputs = [];
    for (let i = 1; i < 22; i++) {
      let val = $(`#input-${i}`).val();
      val === "" ? inputs.push(0) : inputs.push(parseInt(val));
    }
    createFrames(inputs);
  }

  function createFrames(inputs) {
    for (let i = 0; i < 18; i+=2) {
      game.createFrame([inputs[i], inputs[i+1]]);
    }
    game.createFrame([inputs[18], inputs[19], inputs[20]]);
  }

  function resetRunningTotals() {
    for (let i = 0; i < 10; i++) {
      $(`#frame-${i+1}-score`).text("");
    }
  }

  function resetInputValues() {
    for (let i = 1; i < 22; i++) {
      $(`#input-${i}`).val('')
    }
  }
});
