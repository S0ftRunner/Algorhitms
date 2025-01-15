/**
 *
 * @param {Array<string>} a
 * @param {Array<string>} b
 */
function solve(a, b) {
  const map = new Map();
  const resultArr = [];

  for (const num of b) {
    map.set(num, 0);
  }

  for (const num of a) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    }
  }

  for (const num of b) {
    resultArr.push(map.get(num));
  }

  return resultArr;
}

console.log(solve(["ab", "cd", "de", "ab"], ["ab", "de"]));


/**
 * Лучшее решение:
 * const solve = (a,b) => b.map(x => a.filter(n => n === x).length);
 */