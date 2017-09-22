import getCategories from './../../api/getCategories.js';

export default function getCategoriesProcess({ databaseId, token }) {
  return (dispatch, getState) => {
    return getCategories({ databaseId, token }).then(categories => {
      dispatch({ type: 'SET_CATEGORIES', categories });
      return categories;
    });
  };
}
