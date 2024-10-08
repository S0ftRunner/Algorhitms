
/**
 * 
 * @param {Array<string>} arr 
 */
function anagrams(arr) {
  const map = new Map();
  const getKey = (s) => s.split('').sort().join('');

  for (let element of arr) {
    let key = getKey(element);

    map.set(key, [...map.get(key) || [], element]);

  }
  console.log(...map.values());
}


anagrams( ["eat", "tea", "tan", "ate", "nat", "bat"]);