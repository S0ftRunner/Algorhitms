/**
 *
 * @param {string} s
 * @returns {string}
 */
function alphabetized(s) {
  return s
    .replaceAll(" ", "")
    .replace(/[^a-zа-яё]/gi, "")
    .split("")
    .sort((a, b) => {
      if (a.toUpperCase() < b.toUpperCase()) return -1;
      if (a.toUpperCase() > b.toUpperCase()) return 1;

      return 0;
    })
    .join("");
}

console.log(alphabetized("313#$%The Holy Bible"));

/**
 * PS: у меня одно из лучших решений :)
 */