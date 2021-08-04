import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { css } from 'styled-components';

import DeviceViewContext from 'context/DeviceViewContext';
import SearchViewContext from 'context/SearchViewContext';

import Logo from 'components/Logo';
import SwitchThemeButton from 'components/SwitchThemeButton';

import loupeSvg from 'images/loupe.svg';

import {
  Wrapper,
  BurgerWrapper,
  Burger,
  BurgerItem,
  SearchIcon,
  SearchWrapper,
  MenuInsideWrapper,
  MenuItemsLink,
} from './styles';

import useHooks from './useHooks';

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

const TopBarMobile = () => {
  const devicesContext = useContext(DeviceViewContext);
  const { isSearchViewOpen, setIsSearchViewOpen } = useContext(
    SearchViewContext
  );
  const { isMenuOpen, setIsMenuOpen } = useHooks();

  const topBarPaddingLeft =
    devicesContext.deviceType === 'tablet' && (devicesContext.width - 674) / 2;

  const stylesForSwitchButton = css`
    margin: 0;
    position: fixed;
    top: 0;
    right: 0;

    transition: transform 0.1s 0.2s ease-in-out;

    ${isMenuOpen &&
    css`
      transform: translateY(90px);
    `}
  `;

  return (
    <>
      <MenuInsideWrapper isOpen={isMenuOpen}>
        {menuElements.map(({ link, title }) => (
          <MenuItemsLink
            to={link}
            key={link}
            onClick={() => setIsMenuOpen(false)}
          >
            {title}
          </MenuItemsLink>
        ))}
      </MenuInsideWrapper>
      <Wrapper
        paddingLeft={topBarPaddingLeft}
        isOpen={isMenuOpen}
        isSearchViewOpen={isSearchViewOpen}
      >
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <Logo />
        </Link>
        <BurgerWrapper>
          <Burger
            onClick={() => {
              if (isSearchViewOpen) {
                setIsSearchViewOpen(false);
              } else {
                setIsMenuOpen((prev) => !prev);
              }
            }}
            isOpen={isSearchViewOpen}
          >
            <BurgerItem isOpen={isSearchViewOpen} />
            <BurgerItem isOpen={isSearchViewOpen} />
            <BurgerItem isOpen={isSearchViewOpen} />
          </Burger>
        </BurgerWrapper>
        <SearchWrapper
          isOpen={isMenuOpen}
          onClick={() => {
            setIsSearchViewOpen(true);
            setIsMenuOpen(false);
          }}
        >
          <SearchIcon src={loupeSvg} />
        </SearchWrapper>
        <SwitchThemeButton styleForMainWrapper={stylesForSwitchButton} />
      </Wrapper>
    </>
  );
};

export default TopBarMobile;
