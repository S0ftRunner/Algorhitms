
/**
 * 
 * @param {string} str 
 */
function isValidIp(str) {
  let flag = true;
  let arr = str.split('.');
  let countDots = str.matchAll()
  for (let num of arr) {
    if (num < 0 || num > 255) flag = false;
  }
}

console.log(isValidIp('1.2.3.4'));