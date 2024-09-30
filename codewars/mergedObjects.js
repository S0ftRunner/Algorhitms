/**
 *
 * @param {Array<any>} objArr
 * @returns {number}
 */
function objConcat(objArr) {
  const returnsObj = {};

  Object.assign(returnsObj, objArr);

  console.log(returnsObj);

  return -1;
}

let a = { 1: "1", 2: "2", 3: "3" };
let b = { 3: "4", 5: "6", 6: "7", 7: "8" };
let c = { 5: "9", 8: "9", 6: "12", 23: "35" };
let o = [a, b, c];

objConcat(o);
