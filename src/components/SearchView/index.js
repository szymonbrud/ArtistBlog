import React, { useContext } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import debounce from 'lodash.debounce';

import PostMobile from 'components/PostMobile';
import ImageMobile from 'components/ImageMobile';

import DeviceViewContext from 'context/DeviceViewContext';
import SearchViewContext from 'context/SearchViewContext';
import SpecificViewContext from 'context/SpecificViewContext';

import darkLoupe from 'images/darkLoupe.svg';

import useHooks, { InputStates } from './useHooks';

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
    allGallery {
      nodes {
        id
        galleryId
        myOwnImg {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 600, fit: INSIDE) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allPost {
      nodes {
        id
        postId
        myOwnImg {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 600, fit: INSIDE) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const SearchView = () => {
  const staticQueryData = useStaticQuery(pageQuery);

  const {
    swapi: { posts, galleries },
  } = staticQueryData;

  const {
    allPost: { nodes: allPosts },
  } = staticQueryData;

  const {
    allGallery: { nodes: allGalleries },
  } = staticQueryData;

  const viewContext = useContext(DeviceViewContext);
  const { isSearchViewOpen: isOpen, setIsSearchViewOpen } = useContext(
    SearchViewContext
  );
  const { setCurrentImageAndGalleries } = useContext(SpecificViewContext);

  const { search, searchedResoults, inputRef, inputState } = useHooks(
    posts,
    galleries,
    isOpen
  );

  const [, STATE_LOADED, STATE_NORESOULTS] = InputStates;

  return (
    <MainWrapper
      isOpen={isOpen}
      onClick={(event) =>
        event.target === event.currentTarget &&
        (viewContext.deviceType === viewContext.deviceTypes[2] ||
          viewContext.deviceType === viewContext.deviceTypes[3]) &&
        setIsSearchViewOpen(false)
      }
    >
      <InputWrapper
        isSerached={inputState === STATE_LOADED}
        isNoResoult={inputState === STATE_NORESOULTS}
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
            <PostMobile
              postData={post}
              isSearchTemplate
              key={post.id}
              image={allPosts.find((e) => e.postId === post.id)}
            />
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
              img={allGalleries.find((e) => e.galleryId === image.id)}
              openImage={() =>
                setCurrentImageAndGalleries(
                  imageIndex,
                  searchedResoults.galleries
                )
              }
            />
          ))}
        </PostsWrapper>
      )}
    </MainWrapper>
  );
};

export default SearchView;
