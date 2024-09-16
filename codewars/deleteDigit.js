/**
 *
 * @param {number} n
 */
function deleteDigit(n) {
  const stringNumber = n.toString();
  if (stringNumber.length === 0) return n;
  const numbersArray = [];
  for (let i = 0; i < stringNumber.length; i++) {
    numbersArray.push(
      stringNumber.substring(0, i) +
        stringNumber.substring(i + 1, stringNumber.length - 1)
    );
  }

  console.log(numbersArray);
}

deleteDigit(1004);
