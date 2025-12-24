function lengthOfLastWord(s: string): number {
  const trimmedStrings = s.trim().split(' ');

  return trimmedStrings[trimmedStrings.length - 1].length;
}

console.log(lengthOfLastWord('   fly me   to   the moon  '));