//Testing
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The countLetters function counts letters in a string and returns an object with characters and their quantity in the string
const countLetters = function(str) {
  let result = {};
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

//Testing the counLetters function

const testedResult = countLetters("lighthouse in the house");
const testedResult2 = countLetters("");
const testedResult3 = countLetters("   ");
const testedResult4 = countLetters("@#$$");
const testedResult5 = countLetters(" test ");

assertEqual(testedResult["l"], 1);
assertEqual(testedResult["i"], 2);
assertEqual(testedResult["g"], 1);
assertEqual(testedResult["h"], 4);
assertEqual(testedResult["t"], 2);
assertEqual(testedResult["o"], 2);
assertEqual(testedResult["u"], 2);
assertEqual(testedResult["s"], 2);
assertEqual(testedResult["e"], 3);
assertEqual(testedResult["n"], 1);

assertEqual(testedResult2[""], undefined);

assertEqual(testedResult3[""], undefined);

assertEqual(testedResult4["$"], 2);

assertEqual(testedResult5["t"], 2);
  
  
