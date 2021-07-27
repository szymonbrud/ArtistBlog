import styled, { css } from 'styled-components';

export const MainWrapper = styled.section`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: calc(100vh - 90px);
  border-top: 1px solid ${({ theme }) => theme.colors.gray_dark};
  overflow-y: auto;
  background: white;
  transform: translateY(100%);

  transition: transform 0.2s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateY(0);
    `}
`;

export const InputWrapper = styled.div`
  margin: 40px 33px 0;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray_search};
  align-items: center;
  padding-bottom: 19px;

  &:focus-within {
    border-bottom: 1px solid black;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  margin: 0 0 0 15px;

  font-size: 16px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray_dark};
    font-weight: 500;
  }

  :focus {
    outline: 0;
  }
`;

export const SearchIcon = styled.img`
  width: 17px;
`;

export const PostsWrapper = styled.section`
  padding: 0 33px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.h3`
  font-weight: 300;
  font-size: 20px;
  margin: 0 0 40px 0;
`;
