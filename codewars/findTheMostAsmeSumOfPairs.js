/**
 * 
 * @param {Array<number>} arr1 
 * @param {Array<number>} arr2 
 */
function findPair(arr1, arr2) {
  // маппа, где ключ - элементы массивов, значение - их сумма

  const mapArrays = new Map();

  for (let i = 0; i < arr1.length; i++) {
    mapArrays.set(`${arr1[i]}, ${arr2[i]}`, arr1[i] + arr2[i]);
  }

  const middlewareArr = [];

  for (let [key, value] of mapArrays) {
    if 
  }

  
  console.log(mapArrays);
}

findPair([1, 2, 3, 4, 5], [9, 8, 0, 0, 0]);