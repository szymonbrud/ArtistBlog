import * as React from 'react';

import GlobalStylesProvider from 'styles/globalStyles';

import { DeviceViewContextProvider } from 'context';

import Template404 from 'templates/404Template';

import './styles.css';

const NotFoundPage = () => (
  <GlobalStylesProvider>
    <DeviceViewContextProvider>
      <Template404 />
    </DeviceViewContextProvider>
  </GlobalStylesProvider>
);

export default NotFoundPage;
