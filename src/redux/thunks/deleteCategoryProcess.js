import deleteCategory from "./../../api/deleteCategory.js";

export default function deleteCategoryProcess(id, { API_BASE_URL, PORT }) {
  return (dispatch, getState) => {
    return deleteCategory(id, { API_BASE_URL, PORT }).then(id => {
      dispatch({ type: "DELETE_CATEGORY", id });
      return id;
    });
  };
}
