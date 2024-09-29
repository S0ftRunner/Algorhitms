function duplicateEncode(word) {
  const map = new Map();

  for (let i = 0; i < word.length; i++) {
    if (!map.has(word[i].toLowerCase())) map.set(word[i].toLowerCase(), 0);
    map.set(word[i].toLowerCase(), map.get(word[i].toLowerCase()) + 1);
  }

  const resultArr = [];

  for (let i = 0; i < word.length; i++) {
    if (map.get(word[i].toLowerCase()) > 1) {
      resultArr.push(")");
    } else {
      resultArr.push("(");
    }
  }

  console.log(resultArr.join(""));
}

duplicateEncode("Success");


/**
 * Лучшее решение:
 * 
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
 */