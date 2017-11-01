import updateCategory from "./../../api/updateCategory";

export default function updateCategoryProcess(id, changes, token) {
  return (dispatch, getState) => {
    return updateCategory(id, changes, token).then(category => {
      dispatch({ type: "UPDATE_CATEGORY", category });
      return category;
    });
  };
}
