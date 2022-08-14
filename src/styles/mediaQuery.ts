const getMediaQuery = (maxWidth: number) => {
  return `@media (max-width: ${maxWidth}px)`;
};

const mediaQuery = {
  desktop: getMediaQuery(1920),
  mobile: getMediaQuery(428),
};

export default mediaQuery;
