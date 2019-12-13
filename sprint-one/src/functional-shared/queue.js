var Queue = function() {
  var someInstance = {};
   _.extend(someInstance, queueMethods);
  return someInstance;
};

//Queues are FIRST IN FIRST OUT

var queueMethods = {};

var storage = {};
queueMethods.largestKey = 0;
queueMethods.smallestKey = 0;

queueMethods.enqueue = function(val) {
  // add input value to end of obj aka will have increment largestKey
  storage[this.largestKey + 1] = val;
  // increase the largestKey
  this.largestKey++;
}

queueMethods.dequeue = function() {
  var store = storage[this.smallestKey + 1];
  // remove obj with smallestKey
  delete storage[this.smallestKey + 1];
  // increase the smallestKey
  this.smallestKey++;
  if (this.smallestKey > this.largestKey) {
    this.smallestKey = this.largestKey;
  }
  return store;
}

queueMethods.size = function() {
  // the size of the queue is largestKey - smallestKey
  return this.largestKey - this.smallestKey;
}
var newQ = Queue();
console.log(newQ)