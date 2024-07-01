# Дока

## Запуск программы

### Установка зависимостей
```
npm i
```

### Выполнение любых программ

```
npm start ./codewars/название_программы
```

## Дополнительные материалы

### Методы строк

`toLowerCase()` - преобразует символы в нижний регистр:

```js
"Hello Tproger".toLowerCase(); // "hello tproger"
```

`toUpperCase()` - преобразует символы в верхний регистр

```js
"Hello Tproger".toUpperCase(); // "HELLO TPROGER"
```

`concat('строка')` - объединяет две или более строки и возвращает одну

```js
"Hello".concat(" Tproger"); // "Hello Tproger"
"Hello".concat(" T", "p", "r", "o", "g", "e", "r"); // "Hello Tproger"
```

`split(разделитель)` - разделение строки на массив

```js
// Получаем каждый символ
"Hello Tproger".split(""); // ["H", "e", "l", "l", "o", " ", "T", "p", "r", "o", "g", "e", "r"]

// Получаем каждое слово из строки
"Hello Tproger".split(" "); //["Hello", "Tproger"]

// Устанавливаем ограничитель
"Hello Tproger".split(" ", 1); //["Hello"]
```

`repeat(число)` - повторить строку

```js
"Tproger ".repeat(3); // "Tproger Tproger Tproger "
```

`charAt(индекс)` - возвращает символ по указанному индексу

```js
"Hello Tproger".charAt(0); // "H"
```

`include(строка)` - указывает, содержит ли какая-то строка подстроку, переданную в параметр

```js
"Hello Tproger".includes("Tproger"); // true
"Hello Tproger".includes("Hello", 1); // false
```

`indexOf(строка)` - возвращает индекс первого найденного вхождения указанного элемента, если совпадений нет, то возвращается -1, вторым аргументом можно передать индекс, с которого начнется поиск

```js
"Hello World".indexOf("o"); // 4
"Hello World".indexOf("o", 5); // 7
```

`lastIndexOf(строка)` - возвращает индекс последнего найденного элемента указанного значения. Если совпадений нет, то возвращается -1. Вторым аргументом можно передать индекс, с которого начнется поиск

```js
"Hello World".lastIndexOf("o"); // 7
"Hello World".lastIndexOf("o", 5); // 4
```

`endsWith(строка, ограничитель_диапазона_поиска?` - проверяет, заканчивается ли строка символом, заданными первым параметром. Если да, то возвращается `true`, иначе `false`.

```js
"Hello Tproger".endsWith("Tproger"); // true
"Hello Tproger".endsWith("Tproger", 12); // false
```

`startsWith(строка)` - то же самое, что и выше, но поиск идет в начале 

```js
"Hello Tproger".startsWith("Hello"); // true
"Hello Tproger".startsWith("Hello", 1); // false
```

`search(строка)` - проверяет, есть ли в строке указанное значение или регулярное выражение и возвращает индекс начала совпадения.

```js
"hi, hello, hey".search("hello"); // 4
```

`slice(начало, конец?)` - извлекает часть строки и возвращает новую строку


```js
"Методы строк на Tproger".slice(16); // "Tproger"
"Методы строк на Tproger".slice(16, 21); // "Tprog"

// Отрицательные значения тоже работают
"Методы строк на Tproger".slice(-7); // "Tproger"
"Методы строк на Tproger".slice(-7, -2); // "Tprog"
```

`replace(что_заменяем, на_что_заменяем)` - ищет в строке указанное значение и возвращает новую строку, в которой выполнена замена на второй параметр.

```js
"hi, hello, hi".replace("hi", "hey"); // "hey, hello, hi"
"hi, hello, hi".replace(/hi/g, "hey"); // "hey, hello, hey"
```

`replaceAll(строка)` - заменяет все найденные совпадения другой строкой, которая передана в параметр

```js
"hi, hello, hi".replaceAll("hi", "hey"); // "hey, hello, hey"
```

`padEnd(длина, 'символ')` - добавляет в конце отступы, пока строка не достигнет длины, заданной вторым параметром.

```js
"Hello Tproger".padEnd(20, "*"); // "Hello Tproger*******"
```

`padStart(длина, 'символ')` - то же самое, что и выше, но действует для начала

```js
"Hello Tproger".padStart(20, "*"); // "*******Hello Tproger"
```