export function checkExam(array1: string[], array2: string[]): number {
  let total = 0;
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] === array2[i]) total += 4;
    if (array2[i] == "") {total += 0; continue;};
    if (array2[i] !== array1[i]) total -= 1;
  }
  if (total < 0) return 0;

  return total;
 }

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));

/**
 * Лучшее решение:
 * export function checkExam(array1: string[], array2: string[]): number {
  let result = 0;
  
  array2.forEach((item, index) => {
    item === array1[index] ? result += 4 : item === '' ? result += 0 : result -= 1
  });
  
  return Math.max(result, 0);
}
 */