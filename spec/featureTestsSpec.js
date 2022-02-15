describe('Score calculation', () => {
  let game;

  beforeEach(function() {
    game = new Game() ;
  });

  it('a mixed game of strikes and spares returns the correct score', () => {
    game.createFrame([1, 4])
    game.createFrame([4, 5])
    game.createFrame([6, 4])
    game.createFrame([5, 5])
    game.createFrame([10, 0])
    game.createFrame([0, 1])
    game.createFrame([7, 3])
    game.createFrame([6, 4])
    game.createFrame([10, 0])
    game.createFrame([2, 8, 6])

    expect(game.individualScores()).toEqual([ 5, 9, 15, 20, 11, 1, 16, 20, 20, 16 ]);
  });

  it('a gutter game returns the correct score', () => {
    for (let i = 0; i < 10; i++) {
      game.createFrame([0, 0])
    }
    expect(game.individualScores()).toEqual([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
  });

  it('a perfect game returns the correct score', () => {
    for (let i = 0; i < 9; i++) {
      game.createFrame([10, 0])
    }
    game.createFrame([10, 10, 10])
    expect(game.individualScores()).toEqual([ 30, 30, 30, 30, 30, 30, 30, 30, 30, 30 ]);
  });
});
