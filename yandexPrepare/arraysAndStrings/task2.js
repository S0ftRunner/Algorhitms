/**
 * Для двух строк напишите метод, определяющий, является ли одна строка перестановкой другой
 */

function solution(str1, str2) {
  if (str1.length !== str2.length) return false;

  return sort(str1) === sort(str2);
}

/**
 *
 * @param {string} str
 * @returns {string}
 */
function sort(str) {
  return str.split('').sort().join('').toLowerCase();
}

if (solution("abcde", "aecbd")) {
  console.log("первое слово является перестановкой второго");
} else {
  console.log("первое слово не является перестановкой второго");
}
