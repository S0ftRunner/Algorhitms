/**
 * Написать функцию, которая проверяет, является ли заданная строка палиндромом
 * 
 * Ограничение по памяти O(1)
 * 
 * Простая задача, решил сам
 */

/**
 * 
 * @param {string} str 
 */
function isPalindrome(str) {
  if (!str.length) return false;

  const newStr = str.replaceAll(' ', '').toLowerCase();
  for (let i = 0, j = newStr.length - 1; i < newStr.length, j >= 0; i++, j--) {
    if (newStr[i] !== newStr[j]) return false;
  }

  return true;
}

console.log(isPalindrome('1233132')); // false

console.log(isPalindrome('А роза упала на лапу Азора')); //true

console.log(isPalindrome(';А роза упала на лапу Азора;')); //true
