import updateTransaction from "./../../api/updateTransaction";

export default function updateTransactionProcess(id, changes, userId, token) {
  return (dispatch, getState) => {
    changes.user_id = userId;
    return updateTransaction(id, changes, token).then(transaction => {
      dispatch({ type: "UPDATE_TRANSACTION", transaction });
      return transaction;
    });
  };
}
