/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const resArr = [];
  const newArr = arr.filter((item) => item > 0).sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      resArr.push(arr[i]);
    } else {
      resArr.push(newArr[0]);
      newArr.splice(0, 1);
    }
  }
  return resArr;
}

module.exports = sortByHeight;
