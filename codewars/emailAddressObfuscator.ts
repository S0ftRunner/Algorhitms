const obfuscate = function (email: string): string {
  const firstString = email.replaceAll('@', ' [at] ');
  const finalString = firstString.replaceAll('.', ' [dot] ');
  return finalString;
}

console.log(obfuscate('Code_warrior@foo.ac.uk'));

/**
 * Лучшее решение:
 * const obfuscate = email => email.replace(/@/gi, " [at] ").replace(/\./gi, " [dot] ");
 */