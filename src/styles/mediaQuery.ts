const getMediaQuery = (maxWidth: number) => {
  return `@media (max-width: ${maxWidth}px)`;
};

const mediaQuery = {
  desktop: getMediaQuery(1920),
  tablet: getMediaQuery(857),
  mobile: getMediaQuery(428),
};

export default mediaQuery;
