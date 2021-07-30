import * as React from 'react';

import GlobalStyleProvider from 'styles/globalStyles';

import { DeviceViewContextProvider } from 'context';
import { SearchViewContextProvider } from 'context/SearchViewContext';
import { SpecificViewContextProvider } from 'context/SpecificViewContext';

import HomeTemplate from 'templates/HomeTemplate';

import './styles.css';

const IndexPage = () => (
  <SearchViewContextProvider>
    <SpecificViewContextProvider>
      <GlobalStyleProvider>
        <DeviceViewContextProvider>
          <HomeTemplate />
        </DeviceViewContextProvider>
      </GlobalStyleProvider>
    </SpecificViewContextProvider>
  </SearchViewContextProvider>
);

export default IndexPage;
