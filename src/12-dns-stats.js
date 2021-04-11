/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const newObj = {};
  for (let i = 0; i < domains.length; i++) {
    const item = domains[i];
    const newArr = item.split('.');
    let str = '';
    for (let j = newArr.length - 1; j >= 0; j--) {
      str += `.${newArr[j]}`;
      newObj[str] = newObj[str] ? newObj[str] += 1 : 1;
    }
  }
  return newObj;
}

module.exports = getDNSStats;
