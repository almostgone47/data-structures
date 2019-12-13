var Queue = function() {
  this.storage = {};
  this.smKey = 0;
  this.lgKey = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.lgKey + 1] = val;
  this.lgKey++;
}

Queue.prototype.dequeue = function() {
  var store = this.storage[this.smKey + 1];
  delete this.storage[this.smKey + 1];
  this.smKey++;
  if (this.smKey > this.lgKey) {
    this.smKey = this.lgKey;
  }
  return store;
}

Queue.prototype.size = function() {
  return this.lgKey - this.smKey;
}
