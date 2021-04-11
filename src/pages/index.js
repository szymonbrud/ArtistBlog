import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import GlobalStyleProvider from 'styles/globalStyles';

import TopBarMobile from 'components/TopBarMobile';
import PostMobile from 'components/PostMobile';

import { PostWrapper, SectionTitle } from 'styles/pagesStyles';

import './styles.css';

const pageQuery = graphql`
  {
    swapi {
      posts {
        id
        title
        shortDesc
        date
        readTime
        content
        image {
          url
        }
      }
    }
  }
`;

const IndexPage = () => {
  const {
    swapi: { posts },
  } = useStaticQuery(pageQuery);

  return (
    <GlobalStyleProvider>
      <>
        <TopBarMobile />
        <PostWrapper>
          <SectionTitle>Posty</SectionTitle>
          {posts.map((post) => (
            <PostMobile key={post.id} postData={post} />
          ))}
        </PostWrapper>
      </>
    </GlobalStyleProvider>
  );
};

export default IndexPage;
