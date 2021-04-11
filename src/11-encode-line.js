/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let j = i + 1;
    let count = 1;
    for (j; j < str.length; j++) {
      if (str[i] === str[j]) {
        count += 1;
      } else {
        break;
      }
    }
    i += count - 1;
    if (count > 1) {
      result += `${count}${str[i]}`;
    } else {
      result += `${str[i]}`;
    }
  }
  return result;
}

module.exports = encodeLine;
