function box(length: number): Array<string> {
  const resultArray: Array<string> = [];
  for (let i: number = 1; i <= length; i++) {
    if (i > 1 && i < length) {resultArray.push('-'+' '.repeat(length-2)+'-')}
    if (i === 1) {resultArray.push('-'.repeat(length))}
    if (i === length) {resultArray.push('-'.repeat(length))}
  }
  return resultArray;
}


console.log(box(2));

/**
 * Лучшее решение: 
 *
  function box(n) {
  const outB = '-'.repeat(n);
  const inB = `-${' '.repeat(n-2)}-`;

  return [outB, ...Array(n-2).fill(inB), outB];
}
 */