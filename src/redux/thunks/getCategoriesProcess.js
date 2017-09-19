import getCategories from './../../api/getCategories.js';

export default function getCategoriesProcess() {
  return (dispatch, getState) => {
    return getCategories().then(categories => {
      dispatch({ type: 'SET_CATEGORIES', categories });
      return categories;
    });
  };
}
