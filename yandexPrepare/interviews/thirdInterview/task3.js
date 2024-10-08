
/**
 * 
 * @param {Array<string>} arr 
 */
function diapasonses(arr) {
  arr.sort((a,b) => a - b);

  const resultArr = [];
  let position = 0;

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] - arr[i - 1] >= 2) {
      resultArr.push(arr.slice(position, i));
      position = i;
    }
  }

  resultArr.push(arr.slice(position, arr.length));

  console.log(resultArr);
}

diapasonses([1,4,5,2,3,9,8,11,0]);