// RLE

function package(symbol, count) {
  if (count === 1) {
    return symbol;
  }

  return `${symbol}${count}`;
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

  console.log(resultArr.join(""));
}

rle("AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB");
