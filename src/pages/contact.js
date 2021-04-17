import * as React from 'react';

import GlobalStyleProvider from 'styles/globalStyles';

import { DeviceViewContextProvider } from 'context';

import ContactTemplate from 'templates/ContactTemplate';

import './styles.css';

const ContactPage = () => (
  <GlobalStyleProvider>
    <DeviceViewContextProvider>
      <ContactTemplate />
    </DeviceViewContextProvider>
  </GlobalStyleProvider>
);

export default ContactPage;
