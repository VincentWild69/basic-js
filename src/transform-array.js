import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 * 
 */

//  * `--discard-next` excludes the next element of the array from the transformed array.
//  * `--discard-prev` excludes the previous element of the array from the transformed array.
//  * `--double-next` doubles the next element of the array in the transformed array.
//  * `--double-prev` doubles the previous element of the array in the transformed array.

export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error (`'arr' parameter must be an instance of the Array!`);
  if (arr.length < 1) return arr;

  let res = [...arr];
  
  for (let i = 0; i < res.length; i++) {
    if (res[i] == '--discard-next') {
      res[i + 1] = undefined;
      res[i] = undefined;
    } else if (res[i] == '--discard-prev') {
      res[i - 1] = undefined;
      res[i] = undefined;
    } else if (res[i] == '--double-next') {
      res[i] = res[i + 1];
    } else if (res[i] == '--double-prev') {
      res[i] = res[i - 1];
    } else continue;
  }
  return res.filter(el => el != undefined)
}
