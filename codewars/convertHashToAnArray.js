function convertHashToArray(hash) {
  if (!Object.keys(hash).length) return [];

  const resultArr = [];

  for (let key in hash) {
    resultArr.push([key, hash[key]]);
  }

  return resultArr.sort();


}

console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
);

/**
 * Более лучшее решение:
 * 
 * const convertHashToArray = o => Object.entries(o).sort();
 */