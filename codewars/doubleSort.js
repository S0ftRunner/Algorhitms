/**
 *
 * @param {Array<any>} a
 */
function dbSort(a) {
  // сначала я бы прошелся по массиву и разделял бы данные на числа и строки

  const numberArr = [];

  const stringArr = [];

  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "string") {
      stringArr.push(a[i]);
    } else {
      numberArr.push(a[i]);
    }
  }

  const sortedNumber = numberArr.sort((a, b) => a - b);
  const sortedString = stringArr.sort();

  return [...sortedNumber, ...sortedString];

}

console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]));


/**
 * Мое решение было близко к идеальному
 * 
 function dbSort(a){
  let num = a.filter(x => typeof x == 'number').sort((a,b) => a - b)
  let string = a.filter(x => typeof x == 'string').sort()
  return num.concat(string)
}
 */