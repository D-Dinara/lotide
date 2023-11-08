const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

//Testing the counLetters function
const testedResult = countLetters("lighthouse in the house");
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

//Test case: empty string
const testedResult2 = countLetters("");
assertEqual(testedResult2[""], undefined);

//Test case: a string of spaces
const testedResult3 = countLetters("   ");
assertEqual(testedResult3[""], undefined);

//Test case: a string of special characters
const testedResult4 = countLetters("@#$$");
assertEqual(testedResult4["$"], 2);

//Test case: a string with spaces
const testedResult5 = countLetters(" test ");
assertEqual(testedResult5["t"], 2);