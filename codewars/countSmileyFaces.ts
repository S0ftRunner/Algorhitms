export function countSmileys(arr: string[]): number {
  let total = 0;
  if (!arr.length) {
    return 0;
  }

  arr.forEach((element) => {
    if(element.length === 2) {
      if ((element.startsWith(':') || element.startsWith(';')) && (element.endsWith(')') || element.endsWith('D'))) {
        total++;
      } 
    } else {
      if ((element.startsWith(':') || element.startsWith(';')) && (element.endsWith('-)') || element.endsWith('-D') || element.endsWith('~)') || element.endsWith('~D'))) {
        total++;
      }
    }
  })

  return total;
}

console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
