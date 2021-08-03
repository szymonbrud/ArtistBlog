import React, { useContext } from 'react';

import PostMobile from 'components/PostMobile';
import CategoriesMobile from 'components/CategoriesMobile';
import Category from 'components/Category';

import DeviceViewContext from 'context';

import {
  MainWrapper,
  SectionTitle,
  MainContainer,
  CategoryWrapper,
} from './styles';

import useHook from './useHooks';

const PostsTemplate = () => {
  const { allCategories, postsToShow, setAllCategories } = useHook();

  const deviceContext = useContext(DeviceViewContext);

  let marginForLeft = null;

  if (deviceContext.deviceType === 'tablet') {
    marginForLeft = (deviceContext.width - 674) / 2;
  } else if (deviceContext.deviceType === 'smallDesktop') {
    marginForLeft =
      (deviceContext.width - 968) / 2 <= 305
        ? 302
        : (deviceContext.width - 968) / 2;
  } else if (deviceContext.deviceType === 'largeDesktop') {
    marginForLeft = (deviceContext.width - 968) / 2;
  }

  return (
    <>
      <CategoriesMobile
        categories={allCategories}
        setAllCategories={setAllCategories}
      />
      <MainContainer>
        <MainWrapper marginForLeft={marginForLeft}>
          <SectionTitle>Posty</SectionTitle>
          {postsToShow.length === 0 ? (
            <h1>NIE MA POSTÓW DO WYŚwietlenia</h1>
          ) : (
            postsToShow.map((post) => (
              <PostMobile key={post.id} postData={post} />
            ))
          )}
        </MainWrapper>
        <CategoryWrapper>
          <Category
            categories={allCategories}
            setAllCategories={setAllCategories}
          />
        </CategoryWrapper>
      </MainContainer>
    </>
  );
};

export default PostsTemplate;
