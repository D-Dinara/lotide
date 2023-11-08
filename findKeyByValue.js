//The function takes in an object and a value and returns a key on an object where its value matches a given value.
const findKeyByValue = function(obj,value) {

  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;