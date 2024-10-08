// two sum

const arr = [2, 7, 11, 15];

const x = 9;

function twoSum(array, target) {
  const set = new Set();

  for (let i = 0; i < array.length; i++) {
    if (set.has(target - array[i])) {
      return [array[i], target - array[i]];
    }

    set.add(array[i]);
  }
}


console.log(twoSum(arr, x));