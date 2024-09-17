function validPalindrome(s: string): boolean {
  if (checkIfPalindrome(s)) {
    return true;
  } else {
    for (let i = 0; i < s.length; i++) {
      let nowSlice = s.slice(0, i) + s.slice(i + 1, s.length);

      if (checkIfPalindrome(nowSlice)) return true;
    }
  }
  return false;
}

function checkIfPalindrome(str: string): boolean {
  for (let i = 0, j = str.length; i < str.length, j > 0; i++, j--) {
    if (str[i] !== str[j - 1]) {
      return false;
    }
  }

  return true;
}


console.log(validPalindrome('cbbcc'));