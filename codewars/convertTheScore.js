function scoreboard(string) {
  const board = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const resultArr = [];

  const scoreBoarArr = string.split(" ");
  console.log(board["nil"]);

  for (let i = 0; i <= scoreBoarArr.length; i++) {
    if (board[scoreBoarArr[i]] || scoreBoarArr[i] === "nil") {
      resultArr.push(board[scoreBoarArr[i]]);
    }
  }

  return resultArr;
}

scoreboard("Arsenal just conceded another goal, two nil");

/**
 * Почему то были проблемы с nil, пока не сделал доп проверку
 *
 * Лучшее решение:
 * 
function scoreboard(string) {
  var arr=string.split(' ');
  var a=['nil','one','two','three','four','five','six','seven','eight','nine']
  return [a.indexOf(arr[arr.length-2]),a.indexOf(arr[arr.length-1])];
}
 */
