import React from 'react';

import {
  Wrapper,
  BurgerWrapper,
  OneLetterInName,
  Burger,
  BurgerItem,
} from './styles';

const TopBarMobile = () => (
  <Wrapper>
    <p>
      <OneLetterInName>B</OneLetterInName>rudplast
    </p>
    <BurgerWrapper>
      <Burger>
        <BurgerItem />
        <BurgerItem />
        <BurgerItem />
      </Burger>
    </BurgerWrapper>
  </Wrapper>
);

export default TopBarMobile;
