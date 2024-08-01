/**
 *
 * @param {Array<string>} words
 * @returns {string}
 */
function formatWords(words) {
  if (!words?.length) return "";
  if (words?.length === 1) return words.join();
  const wordsCorrectArr = words.filter((element) => {
    return element !== '';
  });
  const finalCorrectArr = wordsCorrectArr.join(', ').split(' ');
  if (finalCorrectArr?.length === 1) return finalCorrectArr.join();
  finalCorrectArr[finalCorrectArr?.length - 2] = finalCorrectArr[finalCorrectArr?.length - 2].replace(',', ' and');
  return finalCorrectArr.join(' ');
}

console.log(formatWords(['one', '', '', 'three']));

/**
 * Лучшее решение:
 * function formatWords(words){
  if (!words) return "";
  return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
}
 */