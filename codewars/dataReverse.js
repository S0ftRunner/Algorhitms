function dataReverse(data) {
  let counter = 0;
  const bytesArray = [];
  let interResult = [];
  const finalResult = [];
  for (let i = 0; i < data.length; i++) {
    interResult.push(data[i]);
    counter++;
    if (counter === 8) {
      bytesArray.push(interResult);
      counter = 0;
      interResult = [];
    }
  }

  for (let i = bytesArray.length - 1; i >= 0; i--) {
    finalResult.push(bytesArray[i]);
  }

  return finalResult.join().split(",").map(Number);
}

const data1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];
// const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];

console.log(dataReverse(data1));
/**
 * Лучшее решение:
 * const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};
 */