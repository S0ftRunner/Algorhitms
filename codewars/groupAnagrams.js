function groupAnagrams(words) {
  const map = new Map();
  const getKey = (s) => s.split("").sort().join();

  words.forEach((str) => {
    const k = getKey(str);
    map.set(k, [...map.get(k) || [], str]);
  });

  return [...map.values()];

}