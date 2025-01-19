function spoonerize(lowerNumber, biggerNumber) {
  const lowerNumberStr = lowerNumber.toString();
  const biggerNumberStr = biggerNumber.toString();

  if (lowerNumberStr.length === biggerNumberStr.length) {
    const restPartOfLowerNumber = lowerNumberStr.slice(
      1,
      lowerNumberStr.length
    );
    const restPartOfBiggerNumber = biggerNumberStr.slice(
      1,
      biggerNumberStr.length
    );

    const noonerizedLowerNumber = lowerNumberStr[0] + restPartOfBiggerNumber;
    const noonerizedBiggerNumber = biggerNumberStr[0] + restPartOfLowerNumber;

    return [parseInt(noonerizedLowerNumber), parseInt(noonerizedBiggerNumber)];
  }
}

function noonerize(numbers) {
  if (!Number.isInteger(numbers[0]) || !Number.isInteger(numbers[1]) ) return 'invalid array';
  if (numbers[0] === numbers[1]) return 0;

  if (numbers[1] > numbers[0]) {
    const noonerizedArr = spoonerize(numbers[0], numbers[1]);
    return noonerizedArr[1] - noonerizedArr[0];
  }
  if (numbers[0] > numbers[1]) {
    const noonerizedArr = spoonerize(numbers[1], numbers[0]);
    return Math.abs(noonerizedArr[0] - noonerizedArr[1]);
  }

}

console.log(noonerize([357, 579]));
