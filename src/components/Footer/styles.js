import styled, { css } from 'styled-components';
import media from 'styles/media';

export const MainWrpaper = styled.footer`
  background: ${({ theme }) => theme.colors.gray_background_dark};
  padding: 0 35px 54px;
  display: flex;
  flex-direction: column;

  ${({ paddingLeft }) =>
    paddingLeft &&
    css`
      padding: 0 ${paddingLeft}px 67px;

      ${media.smallDesktop`
        padding: 0 0px 67px ${paddingLeft}px;
        display: block;
      `}
    `}
`;

export const LogoWrpaper = styled.div`
  width: 145px;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  ${media.smallDesktop`
    width: 202px;
    height: 90px;
  `}
`;

export const SectionName = styled.p`
  font-weight: 100;
  margin: 63px 0 0 0;
  font-size: 18px;

  ${media.smallDesktop`
    margin: 0;
  `}
`;

export const SectionContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 15px 0 -18px;

  ${media.smallDesktop`
    margin: 15px 0 0 0;
  `}
`;

export const PrivacyPolicy = styled.p`
  font-size: 16px;
  margin: 78px 0 0 0;

  ${media.smallDesktop`
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    align-self: end;
    margin: 0 0 10px 0;
  `}
`;

export const GridWrapper = styled.div`
  ${media.smallDesktop`
    display: grid;
    grid-template-columns: 468px 120px 350px;
    grid-template-rows: 1fr 1fr;
    /* justify-content: center; */
    box-sizing: content-box;
    margin: 8px 0 0 0;
  `}
`;

export const AuthorWrapper = styled.article`
  ${media.smallDesktop`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    align-self: end;
    margin: 0 0 10px 0;
        /* position: relative; */
    /* top: -50px; */
  `}
`;

export const ContactWrapper = styled.article`
  ${media.smallDesktop`
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    align-self: start;
    margin: 10px 0 0 0;
  `}
`;

export const Line = styled.div`
  display: none;

  ${media.smallDesktop`
    display: block;
    width: 1px;
    height: 209px;
    background-color: ${({ theme }) => theme.colors.dark_gray_footer_line};
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    justify-self: center;
  `}
`;
