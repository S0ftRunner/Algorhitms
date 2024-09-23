/**
 * 
 * @param {string[]} str 
 */
function kebabize(str) {
  const ansArr = [];
  let position = 0;
  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1].toUpperCase() === str[i - 1]) {
      ansArr.push(str.slice(position, i));
      position = i;
    }
  }

  console.log(ansArr.join('-'));
}

kebabize('CAMEL');