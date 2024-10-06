function sortByBit(arr) {
  return arr.sort((a, b) => dec2binCount(a) === dec2binCount(b) ? a - b: dec2binCount(a) - dec2binCount(b));
}

function dec2binCount(dec) {
  return (dec >>> 0).toString(2).split('').reduce((accumulator, currentValue) => {
    if (currentValue == 1) {
      accumulator++;
    }
    return accumulator;
  }, 0);
}


console.log(sortByBit([7, 6, 15, 8]));