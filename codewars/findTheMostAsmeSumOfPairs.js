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

  let maxElement = mapArrays.get(arr1[0] + arr2[0]);

  let [finalElement, ...other] = mapArrays.keys();
  for (let [key, value] of mapArrays) {
    if (maxElement < value) {
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

  return finalResult.length ? finalResult : [];
}

console.log(findPair([1, 2, 3, 4, 5], [0, 0, 0, 0, 0]));
