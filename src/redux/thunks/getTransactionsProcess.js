import getTransactions from './../../api/getTransactions.js';

export default function getTransactionsProcess() {
  return (dispatch, getState) => {
    return getTransactions().then(transactions => {
      dispatch({ type: 'SET_TRANSACTIONS', transactions });
      return transactions;
    });
  };
}
