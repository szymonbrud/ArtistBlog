import React, { useContext } from 'react';
import { Link } from 'gatsby';

import loupeSvg from 'images/loupe.svg';

import DeviceViewContext from 'context';

import Logo from 'components/Logo';
import SwitchThemeButton from 'components/SwitchThemeButton';

import {
  LogoWrapper,
  MainWrapper,
  MenuWrapper,
  MenuItems,
  Line,
  SearchIcon,
  SearchWrapper,
} from './styles';

const menuElements = [
  {
    title: 'Posty',
    link: '/posts',
  },
  {
    title: 'Sztuka',
    link: '/images',
  },
  {
    title: 'Kontakt',
    link: '/contact',
  },
];

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
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <LogoWrapper marginWidth={marginForLogo}>
          <Logo />
        </LogoWrapper>
      </Link>
      <MenuWrapper>
        {menuElements.map(({ title, link }) => (
          <MenuItems key={link} marginLeftSize={marginLeft} to={link}>
            {title}
          </MenuItems>
        ))}
        <Line />
        <SearchWrapper>
          <SearchIcon src={loupeSvg} alt="search" />
        </SearchWrapper>
        <SwitchThemeButton />
      </MenuWrapper>
    </MainWrapper>
  );
};

export default TopBarDesktop;
