import styled, { css } from 'styled-components';

export const MainWrpaper = styled.section`
  background: ${({ theme }) => theme.colors.gray_background_dark};
  padding: 0 35px 54px;
  display: flex;
  flex-direction: column;

  ${({ paddingLeft }) =>
    paddingLeft &&
    css`
      padding: 0 ${paddingLeft}px 67px;
    `}
`;

export const LogoWrpaper = styled.div`
  width: 145px;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const SectionName = styled.p`
  font-weight: 100;
  margin: 63px 0 0 0;
  font-size: 18px;
`;

export const SectionContent = styled.p`
  font-weight: 400;
  font-size: 16px;
  margin: 15px 0 -18px;
`;

export const PrivacyPolicy = styled.p`
  font-size: 16px;
  margin: 78px 0 0 0;
`;
