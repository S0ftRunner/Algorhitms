function countSmileys(arr: string[]): number {
  let total = 0;
  if (!arr.length) {
    return 0;
  }

  arr.forEach((element) => {
   if (element.length === 2) {
    if ((element.includes(';') || element.includes(':')) && (element.includes(')') || element.includes('D'))) {
      total++;
    }
   } else if (element.length === 3) {
    if ((element.includes(';') || element.includes(':')) && (element.includes(')') || element.includes('D')) && (element.includes('-') || element.includes('~'))) {
      total++;
    }
   }
  })

  return total;
}

console.log(countSmileys([":---)" , "))" , ";~~D" , ";D"]));

/**
 * Мое решение, конечно не является самым правильным, но будет получше некотрых
 * 
 * Самое краткое решение:
 * 
 * function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
 */