function hexStringToRGB(hexString) {
  const RGB = {};

  const hexArr = [];

  for (let i = 1; i < hexString.length; i += 2) {
    hexArr.push(`${hexString[i]}${hexString[i + 1]}`.toLowerCase());
  }

  const [r, g, b] = convert(hexArr);
  RGB.r = r;
  RGB.g = g;
  RGB.b = b;


  console.log(RGB);
}

function convert(hex) {
  return hex.map((element) => {
    return parseInt(element, 16);
  });
}

hexStringToRGB("#000000");

/**
 * Лучшее решение:
  function hexStringToRGB(h) {
    return {
        r: parseInt(h.slice(1,3), 16),
        g: parseInt(h.slice(3,5), 16),
        b: parseInt(h.slice(5,7), 16)
    };  
}
 */