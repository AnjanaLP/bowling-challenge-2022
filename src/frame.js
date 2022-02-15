class Frame {

  constructor(rolls) {
    this.rolls = rolls;
  }

  score() {
    const integerRolls = this.rolls.filter(roll => Number.isInteger(roll));

    const sumOfPinsKnocked = this.rolls.reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0
    );
    return sumOfPinsKnocked;
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
}
