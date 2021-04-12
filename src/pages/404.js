import * as React from 'react';

import GlobalStylesProvider from 'styles/globalStyles';

import Template404 from 'templates/404Template';

const NotFoundPage = () => (
  <GlobalStylesProvider>
    <Template404 />
  </GlobalStylesProvider>
);

export default NotFoundPage;
