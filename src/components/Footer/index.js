import React, { useContext } from 'react';
import DeviceViewContext from 'context';

import propTypes from 'prop-types';

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

const Footer = ({ deviceSettings }) => {
  const deviceContext = useContext(DeviceViewContext);

  const device = deviceSettings || deviceContext;

  let paddingLeft = null;

  if (device.deviceType === 'tablet') {
    paddingLeft = (device.width - 674) / 2;
  } else if (device.deviceType === 'smallDesktop') {
    paddingLeft =
      (device.width - 968) / 2 <= 305 ? 302 : (device.width - 968) / 2;
  } else if (device.deviceType === 'largeDesktop') {
    paddingLeft = (device.width - 968) / 2;
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

Footer.propTypes = {
  deviceSettings: propTypes.objectOf({
    width: propTypes.number,
    deviceType: propTypes.string,
  }),
};

Footer.defaultProps = {
  deviceSettings: null,
};

export default Footer;
