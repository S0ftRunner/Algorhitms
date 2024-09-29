/**
 *
 * @param {string} string
 */
function abbreviate(string) {
  let arrString = string.split(" ");
  console.log(makeAbbreviate(arrString));
}

/**
 *
 * @param {Array<string>} arrString
 */
function makeAbbreviate(arrString) {
  let result = [];
  for (let i = 0; i < arrString.length; i++) {
    let nowWord = arrString[i];
    if (nowWord.length <= 3) {
      result.push(nowWord);
      continue;
    }

    if (nowWord.endsWith(',')) {
      let wordBeforeComa = nowWord.slice(0, nowWord.indexOf(','));
      let modifiedWord = makeAbrreviateFromWord(wordBeforeComa);
      result.push(`${modifiedWord},`);
      continue;
    }

    if (nowWord.includes("-")) {
      let firstPhrase = nowWord.slice(0, nowWord.indexOf("-"));
      let secondPhrase = nowWord.slice(
        nowWord.indexOf("-") + 1,
        nowWord.length
      );

      let abbrWordFirst = makeAbrreviateFromWord(firstPhrase);
      let abbrWordSecond = makeAbrreviateFromWord(secondPhrase);

      result.push(`${abbrWordFirst}-${abbrWordSecond}`);
    } else {
      result.push(makeAbrreviateFromWord(nowWord));
    }
  }

  return result.join(" ");
}

/**
 * @param {string} str
 */
function makeAbrreviateFromWord(str) {
  let abbreviateWord = `${str.charAt(0)}${str.length - 2}${str.charAt(
    str.length - 1
  )}`;

  return abbreviateWord;
}

abbreviate("You need, need not want, to complete this code-wars mission");


/**
 * Боже, мне стыдно за мое громадное решение. TODO: срочный рефактор кода
 * 
 * Лучшее решение:
  var find = /[a-z]{4,}/gi;
  function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

  function abbreviate(string) {
    return string.replace(find, replace);
  }
 */

  