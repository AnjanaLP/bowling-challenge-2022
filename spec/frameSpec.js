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
        frame = new Frame([3, 2, 5]);
        expect(frame.rolls).toEqual([3, 2, 5]);
      });
    });
  });

  describe('#sumOfPinsKnocked', () => {
    describe('when there are two rolls', () => {
      it('returns the sum of the pins knocked in the first and second roll', () => {
        expect(frame.sumOfPinsKnocked()).toEqual(5);
      });
    });

    describe('when there are three rolls', () => {
      it('returns the sum of the pins knocked in the first, second and third roll', () => {
        frame = new Frame([2, 8, 6]);
        expect(frame.sumOfPinsKnocked()).toEqual(16);
      });
    });

    describe('when there is no input for a roll', () => {
      it('still calculates the correct sum without throwing an error', () => {
        frame = new Frame([10, null]);
        expect(frame.sumOfPinsKnocked()).toEqual(10);
      });
    });
  });

  describe('#isStrike', () => {
    describe('when the first roll score is not equal to 10', () => {
      it('returns false', () => {
        expect(frame.isStrike()).toBe(false);
      });
    });

    describe('when the first roll score is equal to 10', () => {
      it('returns true', () => {
        frame = new Frame([10]);
        expect(frame.isStrike()).toBe(true);
      });
    });
  });

  describe('#isSpare', () => {
    describe('when the first and second roll scores do not equal 10', () => {
      it('returns false', () => {
        expect(frame.isSpare()).toBe(false);
      });
    });

    describe('when the first roll is a strike', () => {
      it('returns false', () => {
        frame = new Frame([10]);
        expect(frame.isSpare()).toBe(false);
      });
    });

    describe('when the first and second roll scores equal 10', () => {
      it('returns true', () => {
        frame = new Frame([4, 6]);
        expect(frame.isSpare()).toBe(true);
      });
    });
  });

  describe('#bonus', () => {
    describe('when the number of rolls given is 1', () => {
      it('returns the number of pins knocked in the first roll', () => {
        expect(frame.bonus(1)).toEqual(3);
      });
    });

    describe('when the number of rolls given is 2', () => {
      it('returns the number of pins knocked in the first and second roll', () => {
        expect(frame.bonus(2)).toEqual(5);
      });
    });
  });
});
