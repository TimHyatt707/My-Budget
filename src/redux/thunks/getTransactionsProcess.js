import getTransactions from "./../../api/getTransactions.js";

export default function getTransactionsProcess(id, { API_BASE_URL }) {
  return (dispatch, getState) => {
    if (!id) {
      return null;
    }
    return getTransactions(id, { API_BASE_URL }).then(transactions => {
      dispatch({ type: "SET_TRANSACTIONS", transactions });
      return transactions;
    });
  };
}
