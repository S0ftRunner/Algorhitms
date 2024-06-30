function findMagic(arr: Array<number>): number {
  console.log(arr);
  const answer: number | undefined = arr.find((element, idx) => element === idx) 
  if (answer) return answer;
  return -1;
}

console.log(findMagic([-20, -10, 0, 10, 20]));

/**
 * Лучшее решение:
 * const findMagic = arr => arr.findIndex(i => arr[i] === i);
 */