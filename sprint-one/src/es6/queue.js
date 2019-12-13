class Queue {
  constructor() {
    this.storage = {};
    this.smKey = 0;
    this.lgKey = 0;
  }

  enqueue(val) {
    this.storage[this.lgKey + 1] = val;
    this.lgKey++;
  }

  dequeue() {
    var store = this.storage[this.smKey + 1];
    delete this.storage[this.smKey + 1];
    this.smKey++;
    if (this.smKey > this.lgKey) {
      this.smKey = this.lgKey;
    }
    return store;
  }

  size() {
    return this.lgKey - this.smKey;
  }
}

var queue = new Queue();

queue.enqueue('a');
console.log('enque curr:', queue, "size:", queue.size())
queue.dequeue();
queue.dequeue();
console.log('enque curr:', queue, "size:", queue.size())
