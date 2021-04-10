import * as React from 'react';

import GlobalStyleProvider from 'styles/globalStyles';

import TopBarMobile from 'components/TopBarMobile';

const IndexPage = () => (
  <GlobalStyleProvider>
    <TopBarMobile />
  </GlobalStyleProvider>
);

export default IndexPage;
