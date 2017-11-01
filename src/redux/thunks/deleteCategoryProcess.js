import deleteCategory from "./../../api/deleteCategory.js";

export default function deleteCategoryProcess(id, token) {
  return (dispatch, getState) => {
    return deleteCategory(id, token).then(id => {
      dispatch({ type: "DELETE_CATEGORY", id });
      return id;
    });
  };
}
