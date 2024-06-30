function arrCheck(value: Array<any>): boolean {
  for (let elem of value) {
    if (!Array.isArray(elem)) return false;
  }

  return true;
}

console.log(arrCheck([[1], [2]]));

/**
 * Лучшее решение:
 * const arrCheck = a => a.every(Array.isArray) ;
 */