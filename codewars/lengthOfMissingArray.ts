function getLengthOfMissingArray(arrayOfArrays:any[]):number {
  if (!arrayOfArrays.length) return 0;
  for (let i =0; i < arrayOfArrays.length; i++) {
    if (!arrayOfArrays[i].length) return 0;
  }
  const lenghtsOfArrays: number[] = [];
  arrayOfArrays.forEach((array) => {
    lenghtsOfArrays.push(array.length);
  })
  lenghtsOfArrays.sort((a, b) => a - b);

  console.log(lenghtsOfArrays);
  let observer = lenghtsOfArrays[0];
  

  for (let i = 0; i < lenghtsOfArrays.length; i++) {
    if (lenghtsOfArrays[i] !== observer) return observer;
    observer++;
  }

  return 0;
}

console.log(getLengthOfMissingArray([
  [4, 0],
  [2, 2, 4],
  [3, 3, 2, 2],
  [0, 1, 4, 3, 3],
  [2, 1, 3, 4, 3, 2],
  [2, 1, 4, 0, 0, 1, 4],
  [2, 2, 0, 0, 0, 3, 2, 0],
  [0, 0, 1, 0, 4, 0, 1, 2, 1, 1],
  [1, 0, 1, 0, 1, 0, 2, 2, 2, 0, 3],
  ]));


  /**
   * Лучший вариант решения:
   * export function getLengthOfMissingArray(arrayOfArrays:any[]):number {
   const sortedLengthArray = arrayOfArrays.map(array => array.length).sort((a, b) => a - b);
    if (sortedLengthArray[0] === 0) return 0;
    return --sortedLengthArray.filter((a, index, array) => a - (array[index - 1]) !== 1)[1] || 0;
}
   */