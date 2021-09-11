import * as React from 'react';

import HomeTemplate from 'templates/HomeTemplate';

import TemplateWrapper from 'templates/TemplateWrapper';

import './styles.css';

const IndexPage = (props) => {
  console.log(props);

  return (
    <TemplateWrapper>
      <HomeTemplate />
    </TemplateWrapper>
  );
};

export default IndexPage;
