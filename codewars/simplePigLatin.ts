function simplePigLatin() {
  const test = 'hello world';
  // подается строка, где каждое слово должно трансформироваться по примеру
  // hello -> ellohay
  const strArray = test.split(' ');
  const newArray = strArray.map(el => el.substring(1, el.length) + el.substring(0, 1) + 'ay');
  console.log(newArray.join(' '));
  return newArray.join(' ');
}

simplePigLatin();