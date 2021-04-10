import styled from 'styled-components';

export const Wrapper = styled.nav`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Rosarivo', serif;
  font-size: 18px;
  padding: 0 0 0 32px;
`;

export const BurgerWrapper = styled.div`
  width: 90px;
  height: 90px;
  background: ${({ theme }) => theme.colors.background_gray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OneLetterInName = styled.span`
  font-size: 26px;
  font-family: 'Roboto', serif;
`;

export const Burger = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  display: block;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: content-box;
`;

export const BurgerItem = styled.li`
  width: 26px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black_100};
  margin-top: 6px;

  :first-child {
    margin-top: 0px;
  }
`;
