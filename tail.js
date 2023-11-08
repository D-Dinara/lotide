//The function takes an array and returns everything except for the first item of the provided array.

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;