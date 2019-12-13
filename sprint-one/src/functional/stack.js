var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[index + 1] = value;
    index++;
  };

  someInstance.pop = function() {
    var store = storage[index];
    delete storage[index];
    index--;
    if (index < 0) {
      index = 0;
    }
    return store
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
