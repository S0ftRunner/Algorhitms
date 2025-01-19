
/**
 * 
 * @param {number} heads 
 * @param {number} tails 
 */
function beasts(heads, tails) {
  for (let i = 0; i <= tails; i++) {
    if((i * 5 + (tails - i) * 2) == heads) {
      return [tails - i, i]
    }
  }

  return 'No solutions';
}

console.log(beasts(123, 39));