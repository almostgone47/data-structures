var Stack = function() {
  this.index = 0;
  this.storage = {};
};

Stack.prototype.push = function(val) {
  this.storage[this.index + 1] = val;
  this.index++;
}

Stack.prototype.pop = function() {
  var store = this.storage[this.index];
  delete this.storage[this.index];
  this.index--;
  if (this.index < 0) {
    this.index = 0;
  }
  return store;
}

Stack.prototype.size = function() {
  return this.index;
}


