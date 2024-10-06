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


function recursiveBinarySearch(array, target, start, end) {
  let middle = Math.floor((start + end) / 2);

  if (target === array[middle]) {
    return middle;
  }

  if (target < array[middle]) {
    return recursiveBinarySearch(array, target, start, middle - 1);
  } else {
    return recursiveBinarySearch(array, target, middle + 1, end);
  }

}


console.log(recursiveBinarySearch(arr, 11, 0, arr.length));

// console.log(binarySearch(arr, 5));