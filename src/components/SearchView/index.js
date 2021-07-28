import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import debounce from 'lodash.debounce';

import PostMobile from 'components/PostMobile';
import ImageMobile from 'components/ImageMobile';

import DeviceViewContext from 'context';

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

const SearchView = ({ isOpen, viewGalleriesElements, close }) => {
  const {
    swapi: { posts, galleries },
  } = useStaticQuery(pageQuery);

  const viewContext = React.useContext(DeviceViewContext);

  const inputRef = React.useRef(null);

  const { search, searchedResoults } = useHooks(posts, galleries);

  const { setCurrentUsageGalleries, setSelectedImage } = viewGalleriesElements;

  React.useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <MainWrapper
      isOpen={isOpen}
      onClick={(event) =>
        event.target === event.currentTarget &&
        (viewContext.deviceType === viewContext.deviceTypes[2] ||
          viewContext.deviceType === viewContext.deviceTypes[3]) &&
        close()
      }
    >
      <InputWrapper
        isSerached={
          (searchedResoults !== null && searchedResoults.galleries.length) ||
          (searchedResoults !== null && searchedResoults.posts.length)
        }
        isNoResoult={
          searchedResoults !== null &&
          searchedResoults.galleries.length === 0 &&
          searchedResoults.posts.length === 0
        }
      >
        <SearchIcon src={darkLoupe} alt="loupeIcon" />
        <Input
          placeholder="Szukaj..."
          onChange={debounce(search, 500)}
          ref={inputRef}
        />
      </InputWrapper>
      {searchedResoults !== null && searchedResoults.posts.length !== 0 && (
        <PostsWrapper>
          <CategoryTitle>Posty</CategoryTitle>
          {searchedResoults.posts.map((post) => (
            <PostMobile postData={post} isSearchTemplate key={post.id} />
          ))}
        </PostsWrapper>
      )}
      {searchedResoults !== null && searchedResoults.galleries.length !== 0 && (
        <PostsWrapper>
          <CategoryTitle>Obrazy</CategoryTitle>
          {searchedResoults.galleries.map((image, imageIndex) => (
            <ImageMobile
              imageData={image}
              key={image.id}
              openImage={() => {
                setCurrentUsageGalleries(searchedResoults.galleries);
                setSelectedImage(imageIndex);
              }}
            />
          ))}
        </PostsWrapper>
      )}
    </MainWrapper>
  );
};

export default SearchView;
