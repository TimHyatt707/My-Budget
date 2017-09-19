import createCategory from './../../api/createCategory.js';

export default function createCategoryProcess() {
  return (dispatch, getState) => {
    return createCategory().then(category => {
      dispatch({ type: 'ADD_CATEGORY', category });
      return category;
    });
  };
}
