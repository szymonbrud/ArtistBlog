import * as React from 'react';

import GlobalStyleProvider from 'styles/globalStyles';

import { DeviceViewContextProvider } from 'context';
import { SearchViewContextProvider } from 'context/SearchViewContext';

import HomeTemplate from 'templates/HomeTemplate';

import './styles.css';

const IndexPage = () => (
  <SearchViewContextProvider>
    <GlobalStyleProvider>
      <DeviceViewContextProvider>
        <HomeTemplate />
      </DeviceViewContextProvider>
    </GlobalStyleProvider>
  </SearchViewContextProvider>
);

export default IndexPage;
