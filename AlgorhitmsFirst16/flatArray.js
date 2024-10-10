/**
 * Задача: плоский массив
 * Описание задачи: Например, есть массив с вложенными массивами
 *  [[1], [[2, 3]], [[[4]]]], то он должен преобразоваться в массив [1, 2, 3, 4]
 * input: Array
 * output: Array
 *
 * function flatArray(array) {
 *  todo
 * }
 *
 * console.log(flatArray([[1], [[2, 3]], [[[4]]]])) -> [1, 2, 3, 4]
 */

// function flatArray(array) {
//   const res = [];


//   return res;
// }

// const array = [[1], [[2, 3]], [[[4]]]];

// console.log(flatArray(array));

let obj = {
  side: 5,

  area() {
    return this.side * this.side;
  },

  perimetr: () => {
    return this.side * 5;
  }
}

console.log(obj.area());

console.log(obj.perimetr());