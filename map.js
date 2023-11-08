//The map function takes in an array to map and a callback function
//The map function returns a new array based on the results of the callback function

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
