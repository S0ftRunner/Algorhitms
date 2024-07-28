/**
 * 1) Преобразовать все в lowerCase
 * 2) Заменить все ie на ei
 * 3) Начальную букву привести к upperCase
 */

/**
 *
 * @param {string} str
 */
function proofRead(str) {
  str = str.toLowerCase().replaceAll("ie", "ei");
  str = str.replace(/\.\s\w/g, (c) => c.toUpperCase());
  console.log(str.charAt(0).toUpperCase() + str.slice(1));
}

proofRead("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.");

/**
 * Лучшее решение(чем - то похоже на мое):
 * function proofread(str) { 
  return str.toLowerCase()
    .replace(/ie/g, "ei")
    .replace(/(^|\. )(.)/g, (_, a, b) => a + b.toUpperCase())
}
 */