import createCategory from "./../../api/createCategory.js";

export default function createCategoryProcess(object, { API_BASE_URL }) {
  return (dispatch, getState) => {
    return createCategory(object, { API_BASE_URL }).then(category => {
      dispatch({ type: "ADD_CATEGORY", category });
      return category;
    });
  };
}
