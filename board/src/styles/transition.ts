import { css } from 'styled-components';

export const filterTransition = css`
  transition: filter;
  transition-duration: 0.2s;
  
  :hover {
    filter: brightness(0.95);
  }
  :active {
    filter: brightness(0.9);
  }
`;
