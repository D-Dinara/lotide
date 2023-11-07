//Implementing middle function. The function takes in an array and returns the middle-most element(s) of the given array.
const middle = function(array) {
  
  //Define an array with middle elements
  let middleArray = [];

  //Check if arrays length is less than 3. If it is return an empty array
  if (array.length < 3) {
    return middleArray;
    //Check if the array's length is an even number
    //If even push two middle elements
  } else if (array.length % 2 === 0) {
    const midIndex1 = array.length  / 2 - 1;
    const midIndex2 = array.length / 2;
    middleArray.push(array[midIndex1]);
    middleArray.push(array[midIndex2]);
    //If not even push one middle element
  } else {
    const midIndex = Math.floor(array.length / 2);
    middleArray.push(array[midIndex]);
  }
 
  return middleArray;
};

module.exports = middle;