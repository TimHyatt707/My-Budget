import createTransaction from "./../../api/createTransaction.js";

export default function createTransactionProcess(
  transaction,
  { API_BASE_URL, PORT }
) {
  return (dispatch, getState) => {
    return createTransaction(transaction, {
      API_BASE_URL,
      PORT
    }).then(transaction => {
      dispatch({ type: "ADD_TRANSACTION", transaction });
      return transaction;
    });
  };
}
