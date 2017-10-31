import updateCategory from "./../../api/updateCategory";

export default function updateCategoryProcess(
  id,
  changes,
  { API_BASE_URL, PORT }
) {
  return (dispatch, getState) => {
    return updateCategory(id, changes, {
      API_BASE_URL,
      PORT
    }).then(category => {
      dispatch({ type: "UPDATE_CATEGORY", category });
      return category;
    });
  };
}
