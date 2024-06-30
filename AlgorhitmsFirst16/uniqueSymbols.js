/**
 * Задача: Уникальность всех символов в строке
 * Описание задачи:
 *  Написать функцию, которая будет определять, уникальны ли все символы в строке. Регистр должен учитываться: 'a' и 'A' разные.
 * input: String
 * output: Boolean
 *
 * function isUnique(string) {
 *  todo
 * }
 *
 * console.log(isUnique('abcdef')) -> true
 * console.log(isUnique('12345')) -> true
 * console.log(isUnique(abcdaf)) -> false
 */

function isUnique(word) {
  let set = new Set();
  for (letter of word) {
    if (!set.has(letter)) {
      set.add(letter);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isUnique("abcdef"));
console.log(isUnique("12345"));
console.log(isUnique("abcdaf"));
