import deleteCategory from './../../api/deleteCategory.js';

export default function deleteCategoryProcess(id, { databaseId, token }) {
  return (dispatch, getState) => {
    return deleteCategory(id, { databaseId, token }).then(id => {
      dispatch({ type: 'DELETE_CATEGORY', id });
      return id;
    });
  };
}
