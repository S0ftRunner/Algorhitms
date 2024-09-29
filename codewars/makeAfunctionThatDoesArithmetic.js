function arithmetic(a, b, operator) {
  const arithms = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };

  console.log(arithms[operator]);
}

arithmetic(8, 2, "subtract");

// ну и хуета изичная конечно бывает