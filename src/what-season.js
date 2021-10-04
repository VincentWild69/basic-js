import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
  
 export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';

  try {
    date.toUTCString()
  }
  catch {
    throw new Error('Invalid date!')
  }

  let month = date.getMonth() + 1;

  if (month < 3) return 'winter';
  if (month < 6) return 'spring';
  if (month < 9) return 'summer';
  if (month < 12) return 'autumn';
  return 'winter';
}
