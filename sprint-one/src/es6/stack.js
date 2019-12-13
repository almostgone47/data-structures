class Stack {
  constructor() {
    this.storage = {};
    this.index = 0;
  }
  push(val) {
    this.storage[this.index + 1] = val;
    this.index++;
  }
  pop() {
    var store = this.storage[this.index];
    delete this.storage[this.index];
    this.index--;
    if (this.index < 0) {
      this.index = 0;
    }
    return store;
  }
  size() {
    return this.index;
  }
}

var newStack = new Stack();