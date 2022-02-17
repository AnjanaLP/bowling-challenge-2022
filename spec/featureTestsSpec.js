describe('Score calculation', () => {
  let game;

  beforeEach(function() {
    game = new Game() ;
  });

  it('a mixed game of strikes and spares returns the correct score', () => {
    const rolls = [ [1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0], [2, 8, 6] ]

    for (let i = 0; i < 10; i++) {
      game.createFrame(rolls[i]);
    }
    expect(game.runningTotalScore()).toEqual([ 5, 14, 29, 49, 60, 61, 77, 97, 117, 133]);
  });

  it('a gutter game returns the correct score', () => {
    for (let i = 0; i < 10; i++) {
      game.createFrame([0, 0]);
    }
    expect(game.runningTotalScore()).toEqual([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
  });

  it('a perfect game returns the correct score', () => {
    for (let i = 0; i < 9; i++) {
      game.createFrame([10, 0])
    }
    game.createFrame([10, 10, 10])
    expect(game.runningTotalScore()).toEqual([ 30, 60, 90, 120, 150, 180, 210, 240, 270, 300 ]);
  });
});
