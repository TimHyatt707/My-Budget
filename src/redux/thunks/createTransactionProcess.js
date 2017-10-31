import createTransaction from "./../../api/createTransaction.js";

export default function createTransactionProcess(
  transaction,
  { API_BASE_URL }
) {
  return (dispatch, getState) => {
    return createTransaction(transaction, {
      API_BASE_URL
    }).then(transaction => {
      dispatch({ type: "ADD_TRANSACTION", transaction });
      return transaction;
    });
  };
}
