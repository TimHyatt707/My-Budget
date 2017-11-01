import createCategory from "./../../api/createCategory.js";

export default function createCategoryProcess(id, object, token) {
  return (dispatch, getState) => {
    return createCategory(id, object, token).then(category => {
      dispatch({ type: "ADD_CATEGORY", category });
      return category;
    });
  };
}
