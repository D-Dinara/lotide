// The countLetters function counts letters in a string and returns an object with characters and their quantity in the string
const countLetters = function(str) {
  let result = {};

  // Remove spaces from the string before counting letters
  let noSpacesStr = str.split(" ").join("");

  for (const char of noSpacesStr) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
  
