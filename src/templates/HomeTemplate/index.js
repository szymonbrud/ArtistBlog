import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PostMobile from 'components/PostMobile';
import ImageMobile from 'components/ImageMobile';

import DeviceViewContext from 'context';
import SpecificViewContext from 'context/SpecificViewContext';

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

  const deviceContext = useContext(DeviceViewContext);
  const { setCurrentImageAndGalleries } = useContext(SpecificViewContext);

  let marginForLeft = null;

  if (deviceContext.deviceType === 'smallDesktop') {
    marginForLeft =
      (deviceContext.width - 968) / 2 <= 305
        ? 302
        : (deviceContext.width - 968) / 2;
  }

  return (
    <GridWrapper marginForLeft={marginForLeft}>
      <PostWrapper>
        <SectionTitle>Ostatnio opublikowane posty</SectionTitle>
        {posts.map((post) => (
          <PostMobile key={post.id} postData={post} />
        ))}
      </PostWrapper>
      <GalleryWrapper>
        <SectionTitle>Ostatnio opublikowane obrazy</SectionTitle>
        {galleries.map((image, imageIndex) => (
          <ImageMobile
            imageData={image}
            key={image.id}
            openImage={() => setCurrentImageAndGalleries(imageIndex, galleries)}
          />
        ))}
      </GalleryWrapper>
    </GridWrapper>
  );
};

export default HeroTemplate;
