import { css } from 'styled-components';

const sizes = {
  minimal: 0,
  phone: 375,
  tablet: 834,
  smallDesktop: 1440,
  desktop: 1920,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
