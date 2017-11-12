import deleteTransaction from "./../../api/deleteTransaction.js";

export default function deleteTransactionProcess(id, userId, token) {
  return (dispatch, getState) => {
    return deleteTransaction(id, userId, token).then(() => {
      dispatch({ type: "DELETE_TRANSACTION", id });
      dispatch({ type: "DESELECT_TRANSACTION", id });
      return id;
    });
  };
}
