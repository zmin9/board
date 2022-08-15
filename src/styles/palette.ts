const basicColor = {
  green: '94, 28%',
  red: '0, 70%',
  black: '60, 2%',
};

const getHSL = (colorName: keyof typeof basicColor, l: number): string => {
  return `hsl(${basicColor[colorName]}, ${l}%)`;
};

export const palette = {
  green1: getHSL('green', 10),
  green2: getHSL('green', 20),
  green3: getHSL('green', 30),
  green4: getHSL('green', 40),
  green5: getHSL('green', 50),
  green6: getHSL('green', 60),
  green7: getHSL('green', 70),
  green8: getHSL('green', 80),
  green9: getHSL('green', 90),
  green10: getHSL('green', 99),

  black1: getHSL('black', 10),
  black2: getHSL('black', 20),
  black3: getHSL('black', 30),
  black4: getHSL('black', 40),
  black5: getHSL('black', 50),
  black6: getHSL('black', 60),
  black7: getHSL('black', 70),
  black8: getHSL('black', 80),
  black9: getHSL('black', 90),
  black10: getHSL('black', 99),

  red1: getHSL('red', 10),
  red2: getHSL('red', 20),
  red3: getHSL('red', 30),
  red4: getHSL('red', 40),
  red5: getHSL('red', 50),
  red6: getHSL('red', 60),
  red7: getHSL('red', 70),
  red8: getHSL('red', 80),
  red9: getHSL('red', 90),
  red10: getHSL('red', 99),
};
