var runLengthEncoding = function(str) {
  if (!str) return [];
  let position = 0;
  let symbol = str[0];
  const resultArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== symbol) {
      resultArr.push(package(symbol, i - position));
      symbol = str[i];
      position = i;
    }
  }

  resultArr.push(package(symbol, str.length - position));

  return resultArr;
}


function package(symbol, count) {
  return [count, symbol];
}

console.log(runLengthEncoding("hello world!"));