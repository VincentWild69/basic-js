import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  if (s1 === '' || s2 === '') return 0;
  s1 = [...s1];
  s2 = [...s2];

  let common = s1.reduce((com, el1) => {
    let idx = s2.findIndex(el2 => el2 === el1);
    if (idx !== -1) {
      s2.splice(idx, 1);
      com++
    }
    return com;
  }, 0)

  return common;

}

console.log(getCommonCharacterCount("ssad", "adcaa"))