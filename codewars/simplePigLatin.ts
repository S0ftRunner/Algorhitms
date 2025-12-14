function simplePigLatin() {
  const test = 'O emporatay oay oresmay !';
  // подается строка, где каждое слово должно трансформироваться по примеру
  // hello -> ellohay
  const strArray = test.split(' ');
  const newArray = strArray.map(el =>{
    if (/[a-z]/.test(el)) {
       return el.substring(1, el.length) + el.substring(0, 1) + 'ay'
    } else {
      return el;
    }
  });
  console.log(newArray.join(' '));
  return newArray.join(' ');
}

simplePigLatin();