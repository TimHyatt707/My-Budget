import getTransactions from "./../../api/getTransactions.js";

export default function getTransactionsProcess(id, token) {
  return (dispatch, getState) => {
    if (!id) {
      return null;
    }
    return getTransactions(id, token).then(transactions => {
      dispatch({ type: "SET_TRANSACTIONS", transactions });
      return transactions;
    });
  };
}
