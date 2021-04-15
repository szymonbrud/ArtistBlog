import styled from 'styled-components';
import media from 'styles/media';

export const SectionTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 24px;
  margin: 0 0 37px 0;
`;

export const PostWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background_gray};
  width: 100%;
  padding: 55px 32px 0px;
  margin: 0;
  overflow: hidden;

  ${media.tablet`
  padding: 0px 0 0;
  `}
`;

export const GalleryWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background_gray};
  width: 100%;
  padding: 45px 32px 87px;
  margin: 0;

  ${media.tablet`
    padding: 58px 0px 0;
  `}
`;

export const GridWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background_gray};
  display: grid;
  justify-content: center;

  ${media.tablet`
    grid-template-columns: 307px 307px;
    grid-gap: 60px;
    padding: 127px 0 0;
  `};

  ${media.smallDesktop`
    grid-gap: 136px;
    grid-template-columns: 416px 416px;
    justify-content: flex-start;
    padding: ${({ marginForLeft }) => `202px 0 0 ${marginForLeft}px`}
  `}

  ${media.largeDesktop`
    justify-content: center;
    padding: 202px 0 0 0;
    `}
`;
