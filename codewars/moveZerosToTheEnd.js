function moveZeros(arr) {

  const otherArr = [];

  const zerosArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zerosArr.push(0);
    } else {
      otherArr.push(arr[i]);
    }
  }

  return otherArr.concat(zerosArr);
}


moveZeros([false,1,0,1,2,0,1,3,"a"]);

/**
 * Лучшее решение
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
 */