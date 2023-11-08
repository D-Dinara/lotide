// The function takes in two arguments: an array and a callback
//It keeps collecting items from a provided array until the callback provided returns a truthy value.
//The function will return a slice of the array with elements taken from the beginning.

const takeUntil = function(array, callback) {
  // Check that input is an array and callback is a function
  if (!Array.isArray(array) || typeof callback !== 'function') {
    return 'Invalid input';
  }
  const newArr = [];

  for (const item of array) {
    if (!callback(item)) {
      newArr.push(item);
    } else break;
  }

  return newArr;
};


module.exports = takeUntil;