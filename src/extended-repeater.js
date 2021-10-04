import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  
  let result = [];
  let string = String(str);
  let appendix = [];

  if (options.addition !== undefined) {
    let additor = String(options.addition);
    for (let k = 0; k < (options.additionRepeatTimes || 1); k++) {
      appendix.push(additor);
    }
  }

  if (appendix.length) {
    string += appendix.join(options.additionSeparator || '|');
  }

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    result.push(string)
  }

  return result.join(options.separator || '+')
}
