function test(text: string): Array<string> {
  let newText = text.toUpperCase();
  const resultArray: Array<string> = [];
  resultArray.push(newText);
  for (let i = 0; i < text.length - 1; i++) {
    let resultString = newText.substring(1) + newText[0];
    resultArray.push(resultString);
    newText = resultString;
  }
  return resultArray;
}

console.log(test("CODEWARS"));

/**
 * Примерный алгоритм работы:
 * 1) Перевожу строку в верхний регистр
 * 2) Далее, например, у меня есть слово 'HELLO', которое состоит из такого образа:
 * 0 1 2 3 4    1 2 3 4 0
 * H E L L O -> E L L O H
 * result = text.slice(i + 1) + text.slice(array.length - 1)?
 *
 */

/**
 * Набиолее лучшее решение:
 * function scrollingText(text){
  let result = []
  
  for( var i = 0; i < text.length; i++){
    result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
  }
  
  return result
}
Особо от моего ничем не отличается, но компактнее
 */