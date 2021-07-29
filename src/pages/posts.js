import * as React from 'react';

import GlobalStyleProvider from 'styles/globalStyles';

import { DeviceViewContextProvider } from 'context';
import { SearchViewContextProvider } from 'context/SearchViewContext';

import PostsTemplate from 'templates/PostsTemplate';

import './styles.css';

const PostsPage = () => (
  <SearchViewContextProvider>
    <GlobalStyleProvider>
      <DeviceViewContextProvider>
        <PostsTemplate />
      </DeviceViewContextProvider>
    </GlobalStyleProvider>
  </SearchViewContextProvider>
);

export default PostsPage;
