const testArr = ["dogh","doracecar","doghcar"];

var longestCommonPrefix = function (strs) {
  const firstWord = strs[0];

  const map = new Map();

  for (let i = firstWord.length; i > 1; i--) {
    map.set(firstWord.slice(0, i), 0);
  }

  for (let i = 1; i < strs.length; i++) {
    for (let [key, value] of map) {
      if (strs[i].startsWith(key)) {
        map.set(key, value + 1);
      }
    }
  }

  const resultArr = [...map.entries()];


  resultArr.sort((a, b) => {
    
    return b[1] - a[1];
  });

  if (!resultArr.length) console.log('ничего');

  console.log(resultArr[0][0]);

  
};

longestCommonPrefix(testArr);

/* 
var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;    
};
*/