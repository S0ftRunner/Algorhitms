/**
 * 
 * @param {string} str 
 * @returns {string}
 */
let filterNumbers = function(str) {
  console.log(!parseInt('0'));
  return str.replace(/[0-9]/g, '');
}

console.log(filterNumbers('24bayd3605167'));