//The function findKey takes in an object and a callback.
//It scans the object and returns the first key for which the callback returns a truthy value.
const findKey = function(obj, callback) {

  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;