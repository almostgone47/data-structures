var Stack = function() {
  var someInstance = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

// FIRST IN LAST OUT
stackMethods.index = 0;
var obj = {};

stackMethods.pop = function() {
  if (Object.keys(obj).length !== 0) {
    var store = obj[this.index];
    delete obj[this.index];
    this.index--;
    if (this.index < 0) {
      this.index = 0;
    }
    return store;
  }
};

stackMethods.push = function(val) {
  obj[this.index + 1] = val;
  this.index++;
};

stackMethods.size = function() {
  if (this.index < 0) {
    return 0;
  }
  return this.index;
};
