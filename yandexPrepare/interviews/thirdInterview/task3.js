
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

  for (let i = 0; i < resultArr.length; i++) {
    console.log(packageDiapasonses(resultArr[i]));
  }
}


function packageDiapasonses(arr) {
  if (arr.length === 1) return [arr[0].toString()];
  if (arr.length === 2) return [`${arr[0]}, ${arr[1]}`];

  return [`${arr[0]}-${arr.length - 1}`];
}
diapasonses([1,4,5,2,3,9,8,11,0]);