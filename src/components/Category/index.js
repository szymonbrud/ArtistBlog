import React from 'react';
import PropTypes from 'prop-types';

import {
  CategoriesItemsWrapper,
  CategoryItem,
  MainWrapper,
  Text,
  Line,
} from './styles';

const Category = ({ categories, setAllCategories }) => {
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
      <MainWrapper>
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
        <Line />
      </MainWrapper>
    </>
  );
};

Category.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string.isRequired,
      isSelected: PropTypes.bool.isRequired,
    })
  ),
  setAllCategories: PropTypes.func.isRequired,
};

Category.defaultProps = {
  categories: [],
};

export default Category;
