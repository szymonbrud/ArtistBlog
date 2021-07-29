import { useState, useEffect, useRef } from 'react';

export const InputStates = ['DEFAULT', 'LOADED', 'NO_RESOULTS'];
const [STATE_DEFAULT, STATE_LOADED, STATE_NORESOULTS] = InputStates;

const useHooks = (posts, galleries, isOpen) => {
  const [searchedResoults, setSearchedResoults] = useState(null);
  const [inputState, setInputState] = useState(STATE_DEFAULT);

  const search = (event) => {
    const { value: searchValue } = event.target;

    if (searchValue !== '') {
      const filteredPosts = posts.filter(
        (postElement) =>
          postElement.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          postElement.shortDesc
            .toLowerCase()
            .includes(searchValue.toLowerCase())
      );

      const filteredGalleries = galleries.filter(
        (gallerieElement) =>
          gallerieElement.title
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          gallerieElement.desc.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (filteredPosts.length !== 0 || filteredGalleries.length !== 0) {
        setInputState(STATE_LOADED);
        setSearchedResoults({
          posts: filteredPosts,
          galleries: filteredGalleries,
        });
      } else {
        setInputState(STATE_NORESOULTS);
        setSearchedResoults(null);
      }
    } else {
      setInputState(STATE_DEFAULT);
      setSearchedResoults(null);
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return { search, searchedResoults, inputRef, inputState };
};
export default useHooks;
