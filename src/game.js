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
}
