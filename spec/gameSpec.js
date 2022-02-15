'use strict';

describe('Game',function() {
  let frame;
  let game;

  beforeEach(function() {
    frame =  jasmine.createSpy('frame');
    game = new Game(frame);
  });

  describe('#getFrames', () => {
    it('is initially empty', () => {
      expect(game.getFrames()).toEqual([]);
    });
  });

  describe('#createFrame', () => {
    it('creates a new frame instance', () => {
      game.createFrame([3, 2]);
      expect(frame).toHaveBeenCalled();
    });

    it('stores the newly created frame instance', function() {
      game.createFrame([3, 2])
      expect(game.getFrames().length).toEqual(1);
    });
  });
});
