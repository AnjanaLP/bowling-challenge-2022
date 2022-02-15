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
}
