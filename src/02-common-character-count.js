/* eslint-disable no-empty */
/* eslint-disable indent */
/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
let n = 0;
const ss = s1.split('');
const cc = s2.split('');
for (let i = 0; i < ss.length; i++) {
  for (let j = 0; j < cc.length; j++) {
    if (ss[i] === cc[j]) {
      n += 1;
      cc.splice(j, 1);
      break;
    }
    }
  }
  return n;
}

module.exports = getCommonCharacterCount;
