import deleteTransaction from "./../../api/deleteTransaction.js";

export default function deleteTransactionProcess(id, userId, token) {
  return (dispatch, getState) => {
    return deleteTransaction(id, userId, token).then(id => {
      dispatch({ type: "DELETE_TRANSACTION", id });
      return id;
    });
  };
}
