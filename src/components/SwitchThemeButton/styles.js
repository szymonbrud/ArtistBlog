import styled, { css } from 'styled-components';

export const SwitchThemeWrapper = styled.div`
  width: 90px;
  height: 90px;
  background: ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 65px;

  transition: background 0.1s ease-in-out;

  ${({ styleForMainWrapper }) => styleForMainWrapper};

  ${({ darkTheme }) =>
    darkTheme &&
    css`
      background-color: ${({ theme }) => theme.colors.black_buttons_text};
    `}
`;

export const CircleInsideButton = styled.div`
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 15px;
  height: 15px;
  margin-left: -4px;
  left: 0;
  position: relative;

  transition: left 0.1s ease-in-out, background 0.1s ease-in-out;

  ${({ darkTheme }) =>
    darkTheme &&
    css`
      left: 19px;
      background-color: ${({ theme }) => theme.colors.black_buttons_text};
    `}
`;

export const SwitchButtonWrapper = styled.button`
  width: 38px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background_gray};
  border-radius: 96px;
  border: none;

  &:active ${CircleInsideButton} {
    ${({ darkTheme }) =>
      darkTheme
        ? css`
            left: 14px;
          `
        : css`
            left: 5px;
          `}
  }

  :focus {
    outline: 0;
  }
`;
