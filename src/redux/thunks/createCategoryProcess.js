import createCategory from './../../api/createCategory.js';

export default function createCategoryProcess(object) {
  return (dispatch, getState) => {
    return createCategory(object).then(category => {
      console.log(category);
      dispatch({ type: 'ADD_CATEGORY', category });
      return category;
    });
  };
}
