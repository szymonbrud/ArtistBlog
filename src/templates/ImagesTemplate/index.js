import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import TopBarMobile from 'components/TopBarMobile';
import TopBarDesktop from 'components/TopBarDesktop';
import Footer from 'components/Footer';
import SpecificViewImage from 'components/SpecificViewImage';

import {
  SectionTitle,
  MainWrapper,
  Image,
  ImageMoreButton,
  ImageWrapper,
  ImagesWrapper,
} from './styles';

const graphqlQuary = graphql`
  {
    swapi {
      galleries(orderBy: publishedAt_DESC) {
        id
        image {
          url
          height
          width
        }
        title
        desc
      }
    }
  }
`;

const ImagesTemplate = () => {
  const {
    swapi: { galleries },
  } = useStaticQuery(graphqlQuary);

  const [selectedImage, setSelectedImage] = useState(-1);

  return (
    <>
      <TopBarMobile />
      <TopBarDesktop />
      {selectedImage !== -1 && (
        <SpecificViewImage
          galleries={galleries}
          currImage={selectedImage}
          close={() => setSelectedImage(-1)}
        />
      )}
      <MainWrapper isScrollAllow={selectedImage !== -1}>
        <SectionTitle>Sztuka</SectionTitle>
        <ImagesWrapper>
          {galleries.map(({ image, id }, index) => (
            <ImageWrapper key={id} onClick={() => setSelectedImage(index)}>
              <Image imageURL={image.url} />
              <ImageMoreButton>więcej</ImageMoreButton>
            </ImageWrapper>
          ))}
        </ImagesWrapper>
      </MainWrapper>
      <Footer />
    </>
  );
};

export default ImagesTemplate;
