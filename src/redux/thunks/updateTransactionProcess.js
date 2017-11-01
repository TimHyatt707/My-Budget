import updateTransaction from "./../../api/updateTransaction";

export default function updateTransactionProcess(
  id,
  changes,
  authenticatedUserId,
  token
) {
  return (dispatch, getState) => {
    changes.user_id = authenticatedUserId;
    return updateTransaction(id, changes, token).then(transaction => {
      dispatch({ type: "UPDATE_TRANSACTION", transaction });
      return transaction;
    });
  };
}
