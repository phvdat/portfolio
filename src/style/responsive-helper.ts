const breakPoint = {
  sm: '567px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

export const media = (size: keyof typeof breakPoint) => {
  return `@media only screen and (max-width: ${breakPoint[size]})`;
};
