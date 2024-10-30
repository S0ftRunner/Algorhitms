/**
 * Оператор нулевого слияния - ??
 * Результат выражения a ?? b будет следующим:
 *  - если a определенно, то a
 *  - если а не определенно, то b
 * 
 * Короче говоря, оператор ?? вовзращает первый элемент, если он не undefined/null, 
 * иначе второй
 */


// anagram

// function makeAnagram(arr) {
//   const map = new Map();
//   const getKey = (s) => s.split('').sort().join('');

//   for (let element of arr) {
//     const key = getKey(element);

//     map.set(key, [...map.get(key) || [], element])
//   } 

//   return Array.from(map.values())
// }

// fibbonacci

// function fibo(n) {
//   if (n <= 1) return n;

//   return fibo(n - 1) + fibo(n - 2);
// }

// console.log(fibo(3));

// pow

// function myPow(num, base) {
//   if (base === 1) {
//     return num;
//   }

//   return num * (myPow(num, base - 1));
// }

// console.log(myPow(2, 3));

// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }

// console.log(sum(3)(5));

// composition

// function compose(functions) {
//   return function(x) {
//     functions.reduceRight((acc, func) => {
//       return func(acc);
//     }, x);
//   }
// }

// const obj = {
//   side: 5,
//   area() {
//     return this.side * this.side; // ?
//   },

//   perimetr: () => {
//     return this.side * 5; // ?
//   }
// }

// console.log(obj.perimetr());

// locking

// function locking() {
//   let counter = 0;

//   return function() {
//     return ++counter;
//   }
// }

// let func = locking();

// console.log(func());
// console.log(func());
// console.log(func());

// context

const user = {
  side: 5,

  area() {
    return this.side * this.side;
  },

  perimetr: () => {
    return this.side * 4; // контекст теряется
  }
}
