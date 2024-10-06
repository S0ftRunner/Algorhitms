function solution(str) {
  console.log(isPalindrome(str.toString()));
}

function isPalindrome(value) {
  for (let i = 0, j = value.length - 1; i < value.length, j >= 0; i++, j--) {
    console.log(`value[i] = ${value[i]}; value[j] = ${value[j]}`);
    if (value[i] !== value[j]) return false;
  }

  return true;
}


