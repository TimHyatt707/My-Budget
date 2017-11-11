import createTransaction from "./../../api/createTransaction.js";

export default function createTransactionProcess(id, transaction, token) {
  return (dispatch, getState) => {
    console.log(id, transaction, token);
    return createTransaction(id, transaction, token).then(transaction => {
      if (!transaction.id) return null;
      else dispatch({ type: "ADD_TRANSACTION", transaction });
      return transaction;
    });
  };
}
