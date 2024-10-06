const arr = [1, 4, 5, 1, 6, 9, 2, 7, 11, 43];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return null;
}

console.log(linearSearch(arr, 33));