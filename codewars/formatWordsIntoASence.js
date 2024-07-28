/**
 *
 * @param {Array<string>} words
 * @returns {string}
 */
function formatWords(words) {
  if (!words.length) return "";
  if (words.length === 1) return words.join();

  return words.join().replaceAll(',', ', ').replace(/,\s\w+$/, ' and ') + words[words.length - 1];
}

console.log(formatWords(['one', '', 'three']));
/**
 * TODO: Доработать решение
 */