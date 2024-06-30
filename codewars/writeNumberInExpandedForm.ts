function expandedForm(num: number): string {
  let multiple: number = 10;
  const result: Array<number> = [];
  while (num > 1) {
    let remainder: number = num % multiple;
    if (remainder > 0) {
      result.unshift(remainder);
    }
    num -= remainder;
    multiple *= 10;
  }

  return result.join(' + ');
}

console.log(expandedForm(7304));

/**
 * Лучшее решение:
 * const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
 */