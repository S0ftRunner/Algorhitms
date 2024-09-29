function validParentheses(parenStr) {
  let n = 0;
  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] === '(') n++;
    if (parenStr[i] === ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}


console.log(validParentheses('())(()'));