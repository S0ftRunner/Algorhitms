const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


function binarySearch(array, target) {
  let start = 0;
  let end = array.length;

  let middle;

  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);

    if (array[middle] === target) {
      found = true;
      position = middle;
      return position;
    }

    if (target < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  
  return position;
}

console.log(binarySearch(arr, 5));