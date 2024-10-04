/**
 *
 * @param {Array<number>} arr1
 * @param {Array<number>} arr2
 */
function findPair(arr1, arr2) {
  // маппа, где ключ - элементы массивов, значение - их сумма

  const mapArrays = new Map();

  // нашли количество встречаемых сумм массивов
  for (let i = 0; i < arr1.length; i++) {
    if (!mapArrays.has(arr1[i] + arr2[i])) {
      mapArrays.set(arr1[i] + arr2[i], 0);
    }
    mapArrays.set(arr1[i] + arr2[i], mapArrays.get(arr1[i] + arr2[i]) + 1);
  }

  // теперь ищем самый большой элемент в мапе:

  console.log(mapArrays);


  let maxElement = mapArrays.get(arr1[0] + arr2[0]);

  let [finalElement, ...other] = mapArrays.keys();
  for (let [key, value] of mapArrays) {
    if (maxElement <= value) {
      maxElement = value;
      finalElement = key;
    }
  }

  const finalResult = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] + arr2[i] === finalElement) {
      finalResult.push([arr1[i], arr2[i]]);
    }
  }

  return finalResult.length > 1 ? finalResult : [];
}

console.log(findPair([1,2,3,0,5,-2], [-1,2,-3,4,-5,6]));


/**
 * Мое решение работает для всех базовых тестов, но на динамических выдает ошибку
 * Код, который прошел совершенно все тесты:
  function findPair(arr1, arr2) {
    var sum, pairs = {};
    arr1.forEach(function(curr, i) {
    sum = curr + arr2[i];
      (pairs[sum] = pairs[sum] || []).push([curr, arr2[i]]);
    });
    var len, key, longest = [];
    for (key in pairs) {
      len = pairs[key].length; 
      if (len > 1 && len >= longest.length) {
        longest = pairs[key];
      }
    }
  return longest;
}
 */