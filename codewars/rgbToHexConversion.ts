/**
 * RGB в HEX выглядит следуюзим образом: FF FF FF
 * Значит, мы просто каждое число будем преобразовывать в 16-ричную систему, а потом просто сложим строки
 */

function convertDecToHex(num: number): string {
  if (num <= 0) return '00';
  if (num > 255) return 'FF';
  if (num < 10) return `0${num.toString(16).toUpperCase()}`;
  if (num >= 10 && num <= 15) return `0${num.toString(16).toUpperCase()}`

  return num.toString(16).toUpperCase();
}

function rgb(r: number, g: number, b: number): string {
  let resultR = convertDecToHex(r);
  let resultG = convertDecToHex(g);
  let resultB = convertDecToHex(b);

  return `${resultR}${resultG}${resultB}`;
}

console.log(rgb(13, 39, 128));

/**
 * В принципе, мое решение близко подходит к хорошему
 * Вот более хорошее решение:
 * export function rgb(r: number, g: number, b: number): string {
  // Clamp the values to the range [0, 255]
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Convert the clamped values to hexadecimal strings
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  // Concatenate the hexadecimal strings and return the result
  return (rHex + gHex + bHex).toUpperCase();
}
 */