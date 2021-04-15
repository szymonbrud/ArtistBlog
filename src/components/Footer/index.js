import React, { useContext } from 'react';
import DeviceViewContext from 'context';

import Logo from 'components/Logo';

import {
  LogoWrpaper,
  MainWrpaper,
  PrivacyPolicy,
  SectionContent,
  SectionName,
  GridWrapper,
  AuthorWrapper,
  ContactWrapper,
  Line,
} from './styles';

const Footer = () => {
  const devicesContext = useContext(DeviceViewContext);

  let paddingLeft = null;

  if (devicesContext.deviceType === 'tablet') {
    paddingLeft = (devicesContext.width - 674) / 2;
  } else if (devicesContext.deviceType === 'smallDesktop') {
    paddingLeft =
      (devicesContext.width - 968) / 2 <= 305
        ? 302
        : (devicesContext.width - 968) / 2;
  } else if (devicesContext.deviceType === 'largeDesktop') {
    paddingLeft = (devicesContext.width - 968) / 2;
  }

  return (
    <MainWrpaper paddingLeft={paddingLeft}>
      <LogoWrpaper>
        <Logo />
      </LogoWrpaper>
      <GridWrapper>
        <AuthorWrapper>
          <SectionName>Autor</SectionName>
          <SectionContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            at efficitur nulla. Ut quis turpis turpis. Etiam tempor interdum
            urna ac feugiat. In vehicula quis justo id tincidunt.
          </SectionContent>
        </AuthorWrapper>
        <ContactWrapper>
          <SectionName>Kontakt:</SectionName>
          <SectionContent>Brudplast@gmail.com</SectionContent>
        </ContactWrapper>
        <Line />
        <PrivacyPolicy>
          Polityka prywatności © 2021 Brudplast.
          <br /> All rights reserved
        </PrivacyPolicy>
      </GridWrapper>
    </MainWrpaper>
  );
};

export default Footer;
