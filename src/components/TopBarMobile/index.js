import React, { useContext } from 'react';

import DeviceViewContext from 'context';

import Logo from 'components/Logo';

import loupeSvg from 'images/loupe.svg';

import {
  Wrapper,
  BurgerWrapper,
  Burger,
  BurgerItem,
  SearchIcon,
  SearchWrapper,
} from './styles';

const TopBarMobile = () => {
  const devicesContext = useContext(DeviceViewContext);

  const topBarPaddingLeft =
    devicesContext.deviceType === 'tablet' && (devicesContext.width - 674) / 2;

  return (
    <Wrapper paddingLeft={topBarPaddingLeft}>
      <Logo />
      <BurgerWrapper>
        <Burger>
          <BurgerItem />
          <BurgerItem />
          <BurgerItem />
        </Burger>
      </BurgerWrapper>
      <SearchWrapper>
        <SearchIcon src={loupeSvg} />
      </SearchWrapper>
    </Wrapper>
  );
};

export default TopBarMobile;
