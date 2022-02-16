class Frame {

  constructor(rolls) {
    this.rolls = rolls;
  }

  sumOfPinsKnocked() {
    return this.rolls.reduce((previousVal, currentVal) => previousVal + currentVal, 0);
  }

  isStrike() {
    return this.rolls[0] === 10;
  }

  isSpare() {
    if (this.isStrike()) {
      return false;
    }
    return this.rolls[0] + this.rolls[1] === 10;
  }

  bonus(rolls) {
    return ( rolls === 1 ? this.rolls[0] : this.rolls[0] + this.rolls[1]);
  }
}
