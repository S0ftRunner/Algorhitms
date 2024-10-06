/**
 * Написать функцию, которая принимает массив чисел. Необходимо определить монотонный он или нет. Массив является монотонным, если он все время убывает или все время возрастает или все время
 * одинаковый
 *
 *
 */

function isMonotonic(numbers) {
  let res = true;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] > numbers[i]) {
      res = false;
    }
  }

  if (!res) {
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i - 1] < numbers[i]) return false;
    }
  }

  return true;
}

console.log(isMonotonic([1, 2, 3, 6])); // true
console.log(isMonotonic([6, 3, 2, 2, 1])); // true
console.log(isMonotonic([1, 1, 1, 1])); // true
console.log(isMonotonic([1, 10, 6])); // false
