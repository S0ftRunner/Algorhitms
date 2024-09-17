/**@param {number} n */
function deleteDigit(n) {
  let answer = 0;
  let stringNumber = n.toString();
  for (let i = 0; i < stringNumber.length; i++) {
    let nowNumber =
      stringNumber.slice(0, i) + stringNumber.slice(i + 1, stringNumber.length);
    if (nowNumber > answer) {
      answer = Number.parseInt(nowNumber);
    }
  }
  return answer;
}
console.log(deleteDigit(10));

/*
Лучшее решение:

function deleteDigit(n) {
  const s = String(n)
  return Math.max(...Array.from(s, (_, i) => s.slice(0, i) + s.slice(i + 1)))
}
*/