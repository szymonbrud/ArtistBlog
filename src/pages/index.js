import * as React from 'react';

import GlobalStyleProvider from 'styles/globalStyles';

import { DeviceViewContextProvider } from 'context';

import HomeTemplate from 'templates/HomeTemplate';

import './styles.css';

const IndexPage = () => (
  <GlobalStyleProvider>
    <DeviceViewContextProvider>
      <HomeTemplate />
    </DeviceViewContextProvider>
  </GlobalStyleProvider>
);

export default IndexPage;
