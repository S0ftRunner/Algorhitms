const letters = ['SE::Google', 'SE::Yandex', 'SE::AOL', 'SE::Bing'];

const testingLetter = /SE/i;

letters.forEach((element) => {
  if (testingLetter.test(element)) {
    console.log(element);
  }
})