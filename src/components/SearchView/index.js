import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import debounce from 'lodash.debounce';

import PostMobile from 'components/PostMobile';
import SpecificViewImage from 'components/SpecificViewImage';
import ImageMobile from 'components/ImageMobile';

import darkLoupe from 'images/darkLoupe.svg';

import useHooks from './useHooks';

import {
  MainWrapper,
  SearchIcon,
  Input,
  InputWrapper,
  PostsWrapper,
  CategoryTitle,
} from './styles';

const pageQuery = graphql`
  {
    swapi {
      galleries(orderBy: publishedAt_DESC) {
        id
        title
        desc
        image {
          url
        }
      }
      posts(orderBy: date_DESC) {
        id
        title
        shortDesc
        date
        readTime
      }
    }
  }
`;

const SearchView = ({ isOpen }) => {
  const {
    swapi: { posts, galleries },
  } = useStaticQuery(pageQuery);

  const { search, searchedResoults } = useHooks(posts, galleries);

  const [selectedImage, setSelectedImage] = useState(-1);

  console.log(searchedResoults);
  console.log(selectedImage);

  return (
    <MainWrapper isOpen={isOpen}>
      {selectedImage !== -1 && (
        <SpecificViewImage
          galleries={searchedResoults.galleries}
          currImage={selectedImage}
          close={() => setSelectedImage(-1)}
        />
      )}
      <InputWrapper>
        <SearchIcon src={darkLoupe} alt="loupeIcon" />
        <Input placeholder="Szukaj..." onChange={debounce(search, 500)} />
      </InputWrapper>
      <PostsWrapper>
        {searchedResoults !== null && searchedResoults.posts.length !== 0 && (
          <>
            <CategoryTitle>Posty</CategoryTitle>
            {searchedResoults.posts.map((post) => (
              <PostMobile postData={post} isSmallMargin key={post.id} />
            ))}
          </>
        )}
      </PostsWrapper>
      <PostsWrapper>
        {searchedResoults !== null && searchedResoults.galleries.length !== 0 && (
          <>
            <CategoryTitle>Obrazy</CategoryTitle>
            {searchedResoults.galleries.map((image, imageIndex) => (
              <ImageMobile
                imageData={image}
                key={image.id}
                openImage={() => setSelectedImage(imageIndex)}
              />
            ))}
          </>
        )}
      </PostsWrapper>
    </MainWrapper>
  );
};

export default SearchView;
