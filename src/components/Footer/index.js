import React, { useContext } from 'react';
import DeviceViewContext from 'context';

import Logo from 'components/Logo';

import {
  LogoWrpaper,
  MainWrpaper,
  PrivacyPolicy,
  SectionContent,
  SectionName,
} from './styles';

const Footer = () => {
  const devicesContext = useContext(DeviceViewContext);

  const tabletWrapperPaddingLeft =
    devicesContext.deviceType === 'tablet' && (devicesContext.width - 674) / 2;

  return (
    <MainWrpaper paddingLeft={tabletWrapperPaddingLeft}>
      <LogoWrpaper>
        <Logo />
      </LogoWrpaper>
      <SectionName>Autor</SectionName>
      <SectionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
        efficitur nulla. Ut quis turpis turpis. Etiam tempor interdum urna ac
        feugiat. In vehicula quis justo id tincidunt.
      </SectionContent>
      <SectionName>Kontakt:</SectionName>
      <SectionContent>Brudplast@gmail.com</SectionContent>
      <PrivacyPolicy>
        Polityka prywatności © 2021 Brudplast.
        <br /> All rights reserved
      </PrivacyPolicy>
    </MainWrpaper>
  );
};

export default Footer;
