function zeroPlentiful(arr) {
  const ansArr = [];
  let countZeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZeros++;
      if (arr.length - 1 === i && countZeros >= 4 ) ansArr.push(countZeros);
      if (arr.length - 1 === i && countZeros < 4) return 0;
    } else {
      if (countZeros >= 4) {
        ansArr.push(countZeros);
      } else {
        if (countZeros > 0) return 0;
      }
      countZeros = 0;
    }
  }


  return ansArr.length;
}

console.log(zeroPlentiful([0,0,0,0,1,0]));

/**
 * Лучшее решение:
 *
  function zeroPlentiful(arr){
  var sequences = arr.map((x) => !x ? x : ',').join('').split(',').filter((str) => str);
  return sequences.every((str) => str.length >= 4) ? sequences.length : 0;
}
 */