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

  // TODO: 색상 체계 HEX로 수정해보기 -> 이후 불투명도 조절이 필요하다면 뒤에 두 자리 더 붙여서 8자리로도 사용 가능
  black1: '#1A1A19',
  black2: '#343432',
  black3: '#4E4E4B',
  black4: '#686864',
  black5: '#82827D',
  black6: '#9B9B97',
  black7: '#B4B4B1',
  black8: '#CDCDCB',
  black9: '#E6E6E5',
  black10: '#FDFCFC',

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

export const hexOpacity = {
  10: '1A',
  20: '33',
  30: '4D',
  40: '66',
  50: '80',
  60: '99',
  70: 'B3',
  80: 'CC',
  90: 'E6',
};
