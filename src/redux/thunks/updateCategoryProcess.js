import updateCategory from './../../api/updateCategory';

export default function updateCategoryProcess(id, changes) {
  return (dispatch, getState) => {
    return updateCategory(id, changes).then(category => {
      dispatch({ type: 'UPDATE_CATEGORY', category });
      return category;
    });
  };
}
