/**
 * Короче, дана строка, нужно написать RLE функцию
 * 
 * Решил сам
 */


function package(letter, count) {
  if (count > 1) {
    return `${letter}${count}`;
  } 

  return letter;
}


function rle(str) {
  const resultArr = [];
  let symbol = str[0];
  let position = 0;

  for (let i = 0; i < str.length; i++) {
    if (symbol !== str[i]) {
      resultArr.push(package(symbol, i - position));
      position = i;
      symbol = str[i];
    } 
  }
  resultArr.push(package(symbol, str.length - position));
  return resultArr.join('');
}


console.log(rle('A')); // A
console.log(rle('AAAB')); // A3B
console.log(rle('ABCCC')); // ABC3


