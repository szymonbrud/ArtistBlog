import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import GlobalStyleProvider from 'styles/globalStyles';

import TopBarMobile from 'components/TopBarMobile';
import PostMobile from 'components/PostMobile';
import ImageMobile from 'components/ImageMobile';
import Footer from 'components/Footer';

import {
  PostWrapper,
  SectionTitle,
  GalleryWrapper,
  GridWrapper,
} from './styles';

const pageQuery = graphql`
  {
    swapi {
      galleries(orderBy: publishedAt_DESC, first: 3) {
        id
        title
        desc
        image {
          url
        }
      }
      posts(orderBy: date_DESC, first: 3) {
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

const HeroTemplate = () => {
  const {
    swapi: { posts, galleries },
  } = useStaticQuery(pageQuery);

  return (
    <GlobalStyleProvider>
      <>
        <TopBarMobile />
        <GridWrapper>
          <PostWrapper>
            <SectionTitle>Ostatnio opublikowane posty</SectionTitle>
            {posts.map((post) => (
              <PostMobile key={post.id} postData={post} />
            ))}
          </PostWrapper>
          <GalleryWrapper>
            <SectionTitle>Ostatnio opublikowane obrazy</SectionTitle>
            {galleries.map((image) => (
              <ImageMobile imageData={image} key={image.id} />
            ))}
          </GalleryWrapper>
        </GridWrapper>
        <Footer />
      </>
    </GlobalStyleProvider>
  );
};

export default HeroTemplate;
