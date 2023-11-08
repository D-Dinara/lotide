// The function takeUntil takes in two parameters: an array and a callback
//It keeps collecting items from a provided array until the callback provided returns a truthy value.

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