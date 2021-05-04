export default class Slider {
  constructor(parent) {
    this.parent = parent;
    this.target = parent.children[0];
    this.rafId = null;

    this.targetWidth = this.target.offsetWidth;
  }

  static speed = 5;

  getSignWidth() {
    this.targetWidth = this.target.offsetWidth;
  }
}
