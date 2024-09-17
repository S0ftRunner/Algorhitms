// поделить массив на две части, та часть, которая быстрее найдет — вернет результат

function indexEqualsValue(a) {
  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    if (i === a[i]) return i;
  }

  for (let j = Math.floor(a.length / 2); j < a.length; j++) {
    if (j === a[j]) return j;
  }

  return -1;
}
console.log(indexEqualsValue([-3, 0, 1, 3, 10]));
