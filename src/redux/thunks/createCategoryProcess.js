import createCategory from './../../api/createCategory.js';

export default function createCategoryProcess(object, { databaseId, token }) {
  return (dispatch, getState) => {
    return createCategory(object, { databaseId, token }).then(category => {
      dispatch({ type: 'ADD_CATEGORY', category });
      return category;
    });
  };
}
