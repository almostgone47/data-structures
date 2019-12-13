var Queue = function() {
  var newInstance = Object.create(queueMethods);
  newInstance.storage = {};
  newInstance.smKey = 0;
  newInstance.lgKey = 0;
  return newInstance;
};

queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.lgKey + 1] = val;
  this.lgKey++;
};

queueMethods.dequeue = function() {
  var store = this.storage[this.smKey + 1];
  delete this.storage[this.smKey + 1];
  this.smKey++;
  if (this.smKey > this.lgKey) {
    this.smKey = this.lgKey;
  }
  return store;
};

queueMethods.size = function() {
  return this.lgKey - this.smKey;
};

