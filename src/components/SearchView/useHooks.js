import { useState } from 'react';

const useHooks = (posts, galleries) => {
  const [searchedResoults, setSearchedResoults] = useState(null);

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

      setSearchedResoults({
        posts: filteredPosts,
        galleries: filteredGalleries,
      });
    } else {
      setSearchedResoults(null);
    }
  };

  return { search, searchedResoults };
};
export default useHooks;
