import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  OpenButton,
  CloseSection,
  MainWrapper,
  Wrapper,
  InsideButton,
  Text,
  CategoriesItemsWrapper,
  CategoryItem,
} from './styles';

const CategoryMobile = ({ categories, setAllCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeTheCategory = (categoryName) => {
    setAllCategories((prev) => {
      const categIndex = prev.findIndex((e) => e.categoryName === categoryName);

      const prevEdited = prev.slice();
      prevEdited[categIndex].isSelected = !prev[categIndex].isSelected;
      return prevEdited;
    });
  };

  return (
    <>
      <OpenButton isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        kategorie
      </OpenButton>
      <MainWrapper>
        <CloseSection
          onClick={() => setIsOpen((prev) => !prev)}
          isOpen={isOpen}
        />
        <Wrapper isOpen={isOpen}>
          <InsideButton onClick={() => setIsOpen((prev) => !prev)}>
            kategorie
          </InsideButton>
          <Text>Przeglądaj ulubione kategorie</Text>
          <CategoriesItemsWrapper>
            {categories.map(({ categoryName, isSelected }) => (
              <CategoryItem
                key={categoryName}
                onClick={() => changeTheCategory(categoryName)}
                isActive={isSelected}
              >
                {categoryName}
              </CategoryItem>
            ))}
          </CategoriesItemsWrapper>
        </Wrapper>
      </MainWrapper>
    </>
  );
};

CategoryMobile.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    })
  ),
  setAllCategories: PropTypes.func.isRequired,
};

CategoryMobile.defaultProps = {
  categories: [],
};

export default CategoryMobile;
