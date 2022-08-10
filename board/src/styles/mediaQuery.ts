const getMediaQuery = (maxWidth: number) => {
  return `@media (max-width: ${maxWidth}px)`;
};

const mediaQuery = {
  large: getMediaQuery(1920),
  medium: getMediaQuery(800),
  small: getMediaQuery(428),
}

export default mediaQuery;
