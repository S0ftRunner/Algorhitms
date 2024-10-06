// Работает по времени O(n*logn);

const arr = [-13, 43, 90, 100, -123, 4, 65, 3, 4, 0];

/**
 *
 * @param {Array<any>} array
 * @returns {Array}
 */

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);

  let pivot = array[pivotIndex];

  let less = [];

  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }

  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));

/**
 * Принцип работы алгоритма:
 *
 * Работает по принципу "разделяй и властвуй". Делим массив на подмассивы рекурсивно. Выбираем опорный элемент массива. Его можно выбрать случайно, но чаще берут центральный
 * элемент. Все элементы, которые больше нашего числа - добавляем в один массив, а те которые меньше -  в другой массив. Так делается до тех пор, пока длина массива
 * не окажется единицей
 */
