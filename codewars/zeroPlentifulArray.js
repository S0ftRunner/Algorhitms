function zeroPlentiful(arr) {
  const ansArr = [];
  let countZeros = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZeros++;
      if (arr.length - 1 === i && countZeros >= 4) ansArr.push(countZeros);
    } else {
      if (countZeros >= 4) ansArr.push(countZeros);
      countZeros = 0;
    }
  }

  for (let num of ansArr) {
    console.log(num);
  }
  return ansArr.length;
}

console.log(zeroPlentiful([0,2,0,0,0,0,3,4,5,0,0,0,0,0]));
