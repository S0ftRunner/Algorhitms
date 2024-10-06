// напишите метод, заменяющий все пробелы в строке символами %20

/**
 * 
 * @param {string} str 
 * @returns {string}
 */
function solution(str) {
  return str.trimStart().trimEnd().split(' ').join('%20');
}

console.log(solution('Mr John Smith    '));