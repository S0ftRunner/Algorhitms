// обязательно сделать именно через регулярку
/**
 *
 * @param {string} str
 */
function isValidIp(str) {
  return /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(str);
}
console.log(isValidIp("1.2.03.4"));
