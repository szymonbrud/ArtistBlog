import React, { useContext } from 'react';

import loupeSvg from 'images/loupe.svg';

import DeviceViewContext from 'context';

import Logo from 'components/Logo';

import {
  LogoWrapper,
  MainWrapper,
  MenuWrapper,
  MenuItems,
  Line,
  SearchIcon,
  SearchWrapper,
  CircleInsideButton,
  SwitchButtonWrapper,
  SwitchThemeWrapper,
} from './styles';

const menuElements = ['Posty', 'Sztuka', 'kontakt'];

const TopBarDesktop = () => {
  const deviceContext = useContext(DeviceViewContext);

  let marginForLogo = null;
  let marginLeft = null;

  if (deviceContext.deviceType === 'smallDesktop') {
    marginForLogo =
      (deviceContext.width - 968) / 2 <= 305
        ? 50
        : ((deviceContext.width - 968) / 2 - 202) / 2;
  } else if (deviceContext.deviceType === 'largeDesktop') {
    marginLeft = (deviceContext.width - 968) / 2;
  }

  return (
    <MainWrapper>
      <LogoWrapper marginWidth={marginForLogo}>
        <Logo />
      </LogoWrapper>
      <MenuWrapper>
        {menuElements.map((menuText) => (
          <MenuItems key={menuText} marginLeftSize={marginLeft}>
            {menuText}
          </MenuItems>
        ))}
        <Line />
        <SearchWrapper>
          <SearchIcon src={loupeSvg} alt="search" />
        </SearchWrapper>
        <SwitchThemeWrapper>
          <SwitchButtonWrapper>
            <CircleInsideButton />
          </SwitchButtonWrapper>
        </SwitchThemeWrapper>
      </MenuWrapper>
    </MainWrapper>
  );
};

export default TopBarDesktop;
