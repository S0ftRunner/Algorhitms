function findEvenIndex(arr: number[]): number {
  if (arr.length === 0) return -1;
  for (let i = 0; i < arr.length; i++) {
    const leftSide = arr.slice(0, i);
    const rightSide = arr.slice(i + 1, arr.length);

    const sumOfleftSide = leftSide.reduce((a, b) => {
      return a + b;
    }, 0);

    const sumOfRightSide = rightSide.reduce((a, b) => {
      return a + b
    }, 0)
    
    if (sumOfRightSide === sumOfleftSide) return i;
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

// Лучший вариант совпадает с моим. Кайф:)
