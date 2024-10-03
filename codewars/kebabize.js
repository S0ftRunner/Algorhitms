/**
 * 
 * @param {string} str 
 */
function kebabize(str) {
  return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase();
}

console.log(kebabize('CAMEL'));