/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numArr = n.toString().split('');
  const newArr = [];
  for (let i = 0; i < numArr.length; i++) {
    const clonArr = [...numArr];
    clonArr.splice(i, 1);
    newArr.push(+clonArr.join(''));
  }

  return Math.max(...newArr);
}

module.exports = deleteDigit;
