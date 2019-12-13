var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // store smallest key
  var smallestKey = 0;
  var largestKey = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    // add keys using the Object.keys.length + 1 and input value
    storage[largestKey + 1] = value;
    // add one to smallest key
    largestKey++;
  };

  someInstance.dequeue = function() {
    // store the property that is next to be deleted so it can be returned
    var store = storage[smallestKey + 1];
    // remove the smallest indexed property
    delete storage[smallestKey + 1];
    // increase the smallest index so the next dequeue will remove the next smallest indexed property
    smallestKey++;
    // if the smallest index catches up the the largest index, make them equal
    if (smallestKey > largestKey) {
      smallestKey = largestKey;
    }
    // return the dequeued value
    return store;
  };

  someInstance.size = function() {
    return largestKey - smallestKey;
  };

  return someInstance;
};
// A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front (FIFO: first in, first out).

// enqueue(string) - Add a string to the back of the queue
// dequeue() - Remove and return the string at the front of the queue
// size() - Return the number of items in the queue