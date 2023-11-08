//The function takes a string and returns all the indices in the string where each character is found

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    //Check if the character is a space
    if (char !== " ") {

      //If the results[char] array already exists push index to it, if not create an empty array
      results[char] = results[char] || [];
      results[char].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;