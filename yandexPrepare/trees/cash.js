function cashFunction(fn) {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      console.log("Взято из кэша");
      return cash[n];
    }
    console.log("Посчитала функцию");
    let result = fn(n);
    cash[n] = result;

    return result;
  };
}

function factorial(x) {
  let result = 1;
  while (x != 1) {
    result *= x;
    x--;
  }

  return result;
}

const cashFactorial = cashFunction(factorial);

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(1);
cashFactorial(5);
