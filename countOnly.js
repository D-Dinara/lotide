// Count the occurrence of specific items in an array
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;