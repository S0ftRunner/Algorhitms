/**
 * Необходимо написать функцию, которая на вход принимает url
 * асинхронно ходит по этому URL GET запросом и возвращает данные (json)
 * Для получения данных использовать fetch
 * Если во время запроса произошла ошибка, то попробовать запросить еще 5 раз.
 * Если в итоге информацию не удается получить, то вернем ошибку "URL недоступен"
 * 
 * Вроде решение верное
 */

function get(url, counter = 1) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        if (counter === 5) {
          throw new Error("URL недоступен");
        } else {
          get(url, (counter += 1));
          reject(err);
        }
      });
  });
}

get(url)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
