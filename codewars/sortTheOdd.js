/**
 *
 * @param {Array<number>} array
 */
function sortArray(array) {
  const oddArr = [];
  const oddPossitions = [];
  const notOddPositions = [];
  const resultArr =[];
  for (let i = 0; i < array.length; i++) {
    if (isNumberOdd(array[i])) {
      oddArr.push(array[i]);
      oddPossitions.push(i);
    } else {
      notOddPositions.push(i);
    }
  }

  const sortOddArr = oddArr.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
 
  }

  console.log(resultArr);
}

function isNumberOdd(num) {
  if (num <= 0) return false;
  const maximumDividor = Math.sqrt(num) + 1;
  for (let i = 2; i < maximumDividor; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

sortArray([5, 8, 6, 3, 4]);
