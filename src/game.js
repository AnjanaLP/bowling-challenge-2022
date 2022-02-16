class Game {

  constructor(frameClass = Frame) {
    this.frameClass = frameClass;
    this._frames = []
  }

  getFrames() {
    return this._frames;
  }

  createFrame(rolls) {
    let frame = new this.frameClass(rolls);
    this._frames.push(frame);
  }

  runningTotalScore() {
    const cumulativeSum = (sum => value => sum += value)(0);
    return this._individualFrameScores().map(cumulativeSum);
  }

  _individualFrameScores() {
    let sums = []
    for (let i = 0; i < 10; i++) {
      let frame = this._frames[i];
      let sum = 0;
      sum += frame.sumOfPinsKnocked();
      if (this._nextFrame(frame, 1)) {
        if (frame.isStrike()) {
          if (this._nextFrame(frame, 1).isStrike()) {
            sum += this._nextFrame(frame, 1).bonus(2);
            if (this._nextFrame(frame, 2)) {
              sum += this._nextFrame(frame, 2).bonus(1);
            }
          } else {
            sum += this._nextFrame(frame, 1).bonus(2);
          }
        } else if (frame.isSpare()) {
          sum += this._nextFrame(frame, 1).bonus(1);
        }
      }
      sums.push(sum)
    }
    return sums;
  }

  _nextFrame(frame, num) {
    let frameIndex = this._frames.indexOf(frame);
    return this._frames[(frameIndex + num)];
  }
}
