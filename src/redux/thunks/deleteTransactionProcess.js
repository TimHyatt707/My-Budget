import deleteTransaction from "./../../api/deleteTransaction.js";

export default function deleteTransactionProcess(id, { API_BASE_URL }) {
  return (dispatch, getState) => {
    return deleteTransaction(id, { API_BASE_URL }).then(id => {
      dispatch({ type: "DELETE_TRANSACTION", id });
      return id;
    });
  };
}
