/**
 * Реализуйте алгоритм, определяющий, все ли символы в строке встречаются только один раз?
 */

function solution(str) {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1);
    } else {
      return false;
    }
  }

  return true;
}

if (solution('abcda')) {
  console.log('строка не имеет повторяющихся символов');
} else {
  console.log('строка имеет повторяющиеся символы');
}
