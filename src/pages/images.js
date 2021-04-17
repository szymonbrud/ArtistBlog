import * as React from 'react';

import GlobalStyleProvider from 'styles/globalStyles';

import { DeviceViewContextProvider } from 'context';

import ImagesTemplate from 'templates/ImagesTemplate';

import './styles.css';

const IndexPage = () => (
  <GlobalStyleProvider>
    <DeviceViewContextProvider>
      <ImagesTemplate />
    </DeviceViewContextProvider>
  </GlobalStyleProvider>
);

export default IndexPage;
