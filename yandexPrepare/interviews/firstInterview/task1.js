/**
 * Нужно написать функцию get
 * На вход функция принимает объект и путь до поля объекта
 * Путь - это строка, разделенная точкой
 * Функция должна вернуть соответствующее поле объекта
 * Запрашиваемого поля в объекте быть не может
 * 
 * 
 * Решил сам, все норм
 */

// разбиваем по точкам

function get(obj, path) {
  const pathArr = path.split('.');

  const currentObj = pathArr.shift();

  if (obj[currentObj] && pathArr.length > 0) {
    return get(obj[currentObj], pathArr.shift());
  } else if (!obj[currentObj]) {
    return null;
  }

  return obj[currentObj]

}

const obj = {
  a: {
    b: {
      c: "d",
    },
    e: "f",
  },
};

console.log(get(obj, "a.b")); // {c: 'd'}

console.log(get(obj, "a.v")); // undefined || null
