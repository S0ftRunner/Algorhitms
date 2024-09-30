function removeDuplicateWords(s) {
  const arrS = s.split(" ");
  const set = new Set();
  const returnAns = [];

  arrS.forEach((word) => {
    set.add(word);
  });

  for (let word of set) {
    returnAns.push(word);
  }

  return returnAns.join(' ');
}

console.log(removeDuplicateWords(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
));

/**
 * Лучшее решение:
 * 
 * const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')
 * 
 * Ваще кайф, вспомнил питончик
 */