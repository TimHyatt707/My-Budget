import deleteCategory from './../../api/deleteCategory.js';

export default function deleteCategoryProcess(id) {
  return (dispatch, getState) => {
    return deleteCategory(id).then(id => {
      dispatch({ type: 'DELETE_CATEGORY', id });
      return id;
    });
  };
}
