import React, { useContext, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import GlobalStyleProvider from 'styles/globalStyles';

import TopBarMobile from 'components/TopBarMobile';
import PostMobile from 'components/PostMobile';
import ImageMobile from 'components/ImageMobile';
import Footer from 'components/Footer';
import TopBarDesktop from 'components/TopBarDesktop';
import SpecificViewImage from 'components/SpecificViewImage';
import SearchView from 'components/SearchView';

import DeviceViewContext from 'context';

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

  const [selectedImage, setSelectedImage] = useState(-1);
  const [isSearchViewOpen, setIsSearchViewOpen] = useState(false);

  const [currentUsageGalleries, setCurrentUsageGalleries] = useState([]);

  let marginForLeft = null;

  if (deviceContext.deviceType === 'smallDesktop') {
    marginForLeft =
      (deviceContext.width - 968) / 2 <= 305
        ? 302
        : (deviceContext.width - 968) / 2;
  }

  return (
    <GlobalStyleProvider isBodyOverflowHidden={isSearchViewOpen}>
      <>
        <TopBarMobile
          setIsSearchViewOpen={setIsSearchViewOpen}
          isSearchViewOpen={isSearchViewOpen}
        />
        <TopBarDesktop setIsSearchViewOpen={setIsSearchViewOpen} />
        {selectedImage !== -1 && (
          <SpecificViewImage
            galleries={currentUsageGalleries}
            currImage={selectedImage}
            close={() => setSelectedImage(-1)}
          />
        )}
        <SearchView
          isOpen={isSearchViewOpen}
          close={() => setIsSearchViewOpen(false)}
          viewGalleriesElements={{
            setCurrentUsageGalleries,
            setSelectedImage,
          }}
        />
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
                openImage={() => {
                  setSelectedImage(imageIndex);
                  setCurrentUsageGalleries(galleries);
                }}
              />
            ))}
          </GalleryWrapper>
        </GridWrapper>
        <Footer />
      </>
    </GlobalStyleProvider>
  );
};

export default HeroTemplate;
