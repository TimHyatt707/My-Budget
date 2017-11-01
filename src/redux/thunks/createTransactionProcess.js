import createTransaction from "./../../api/createTransaction.js";

export default function createTransactionProcess(id, transaction, token) {
  return (dispatch, getState) => {
    return createTransaction(id, transaction, token).then(transaction => {
      if (!transaction.id) return null;
      else dispatch({ type: "ADD_TRANSACTION", transaction });
      return transaction;
    });
  };
}
