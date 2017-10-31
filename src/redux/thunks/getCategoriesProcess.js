import getCategories from "./../../api/getCategories.js";

export default function getCategoriesProcess(id, { API_BASE_URL }) {
  return (dispatch, getState) => {
    if (!id) {
      return null;
    }
    return getCategories(id, { API_BASE_URL }).then(categories => {
      dispatch({ type: "SET_CATEGORIES", categories });
      return categories;
    });
  };
}
