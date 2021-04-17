import * as React from 'react';

import GlobalStyleProvider from 'styles/globalStyles';

import { DeviceViewContextProvider } from 'context';

import PostsTemplate from 'templates/PostsTemplate';

import './styles.css';

const PostsPage = () => (
  <GlobalStyleProvider>
    <DeviceViewContextProvider>
      <PostsTemplate />
    </DeviceViewContextProvider>
  </GlobalStyleProvider>
);

export default PostsPage;
