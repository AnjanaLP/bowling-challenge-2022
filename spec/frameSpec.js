'use strict';

describe('Frame', () => {
  let frame;

  beforeEach(function() {
    frame = new Frame([3, 2]);
  });

  describe('#rolls', () => {
    describe('when there is no third roll', () => {
      it('returns the pins knocked in the first and second roll in order', () => {
        expect(frame.rolls).toEqual([3, 2]);
      });
    });

    describe('when there is a third roll', () => {
      it('returns the pins knocked in the first, second and third roll in order', () => {
        frame = new Frame(([3, 2, 5]));
        expect(frame.rolls).toEqual([3, 2, 5]);
      });
    });
  });

  describe('#score', () => {
    it('returns the sum of the pins knocked in the frame', () => {
      expect(frame.score()).toEqual(5);

    });

    describe('when there is no input for a roll', () => {
      it('replaces the nil value with zero to return the correct sum', () => {
        frame = new Frame(([10, null]));
        expect(frame.score()).toEqual(10);
      });
    });
  });
});
