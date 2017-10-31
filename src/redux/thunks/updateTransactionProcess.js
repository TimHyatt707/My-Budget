import updateTransaction from "./../../api/updateTransaction";

export default function updateTransactionProcess(
  id,
  changes,
  { API_BASE_URL }
) {
  return (dispatch, getState) => {
    return updateTransaction(id, changes, {
      API_BASE_URL
    }).then(transaction => {
      dispatch({ type: "UPDATE_TRANSACTION", transaction });
      return transaction;
    });
  };
}
