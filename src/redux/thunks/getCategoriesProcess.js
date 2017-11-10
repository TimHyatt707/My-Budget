import getCategories from "./../../api/getCategories.js";

export default function getCategoriesProcess(id, token) {
  return (dispatch, getState) => {
    if (!id) {
      return [];
    }
    return getCategories(id, token).then(categories => {
      console.log(categories);
      dispatch({ type: "SET_CATEGORIES", categories });
      return categories;
    });
  };
}
