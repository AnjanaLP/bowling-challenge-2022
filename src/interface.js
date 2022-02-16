$(document).ready(function() {
  var game = new Game();

  $('#calculate-score').click(function() {
    for (let i = 1; i < 19; i+= 2) {
      game.createFrame([parseInt($(`#input-${i}`).val()), parseInt($(`#input-${i+1}`).val())])
    }
    game.createFrame([parseInt($(`#input-19`).val()), parseInt($(`#input-20`).val()), parseInt($(`#input-21`).val()) ])

    updateScore()
  });

  $('#reset-game').click(function() {
    game = new Game();
    for (let i = 0; i < 10; i++) {
      $(`#frame-${i+1}-score`).text("");
    }
    for (let i = 1; i < 22; i++) {
      $(`#input-${i}`).val('')
    }
  });

  function updateScore() {
    for (let i = 0; i < 10; i++) {
      $(`#frame-${i+1}-score`).text(game.runningTotalScore()[i]);
    }
    $('#frame-10-score').css('color', 'red');
  };
});
