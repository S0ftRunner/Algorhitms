function solve(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    }

    map.set(arr[i], map.get(arr[i]) + 1);
  }

  console.log(map);

  return arr.sort((a, b) => {
    if( map.get(b) - map.get(a) > 0) {
      return 1;
    } else if (map.get(b) - map.get(a) < 0) {
      return -1;
    } else {
      if (a - b > 0) return 1;
      if (a - b < 0) return -1
      return 0;
    }
  });
}

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));

/**
function solve(arr){
  var r={}
  for(var n of arr) r[n]=r[n]+1||1
  return arr.slice().sort((a,b)=>r[b]-r[a]||a-b)
}
 */