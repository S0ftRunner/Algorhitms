/**
 *
 * @param {Array<number>} a
 * @param {number} limit
 */
function smallEnough(a, limit) {
  return a.filter(currNum => currNum >= limit).length === 0;
}

console.log(smallEnough([66, 101], 200));
