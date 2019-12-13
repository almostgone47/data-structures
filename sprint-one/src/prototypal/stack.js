// Last in first out
var Stack = function() {
  var newInstance = Object.create(stackMethods);
  newInstance.index = 0;
  newInstance.storage = {};
  return newInstance;
};

stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.index + 1] = val;
  this.index++;
}

stackMethods.pop = function() {
  var store = this.storage[this.index];
  delete this.storage[this.index];
  this.index--;
  if (this.index < 0) {
    this.index = 0;
  }
  return store;
}

stackMethods.size = function() {
  return this.index;
}

var newStack = Stack();
newStack.push("thing");
newStack.push("2thing2");
console.log(newStack, "Size", newStack.size());
newStack.pop();
console.log(newStack, "Size", newStack.size());