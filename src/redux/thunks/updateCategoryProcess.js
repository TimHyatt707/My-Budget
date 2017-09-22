import updateCategory from './../../api/updateCategory';

export default function updateCategoryProcess(
  id,
  changes,
  { databaseId, token }
) {
  return (dispatch, getState) => {
    return updateCategory(id, changes, { databaseId, token }).then(category => {
      dispatch({ type: 'UPDATE_CATEGORY', category });
      return category;
    });
  };
}
