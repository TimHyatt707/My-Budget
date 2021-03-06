import deleteCategory from "./../../api/deleteCategory.js";

export default function deleteCategoryProcess(id, token) {
  return (dispatch, getState) => {
    return deleteCategory(id, token).then(() => {
      dispatch({ type: "DELETE_CATEGORY", id });
      dispatch({ type: "DESELECT_CATEGORY", id });
      return id;
    });
  };
}
