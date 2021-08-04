import React from 'react';
import propTypes, { element } from 'prop-types';

import GlobalStyleProvider from 'styles/globalStyles';

import TopBarMobile from 'components/TopBarMobile';
import TopBarDesktop from 'components/TopBarDesktop';
import SpecificViewImage from 'components/SpecificViewImage';
import SearchView from 'components/SearchView';
import Footer from 'components/Footer';

import { DeviceViewContextProvider } from 'context/DeviceViewContext';
import { SearchViewContextProvider } from 'context/SearchViewContext';
import { SpecificViewContextProvider } from 'context/SpecificViewContext';

const TemplateWrapper = ({ children }) => (
  <SearchViewContextProvider>
    <SpecificViewContextProvider>
      <GlobalStyleProvider>
        <DeviceViewContextProvider>
          <TopBarMobile />
          <TopBarDesktop />
          <SpecificViewImage />
          <SearchView />
          {children}
          <Footer />
        </DeviceViewContextProvider>
      </GlobalStyleProvider>
    </SpecificViewContextProvider>
  </SearchViewContextProvider>
);

TemplateWrapper.propTypes = {
  children: propTypes.oneOfType([propTypes.arrayOf(element), element])
    .isRequired,
};

export default TemplateWrapper;
