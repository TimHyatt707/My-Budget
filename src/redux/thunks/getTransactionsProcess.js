import getTransactions from './../../api/getTransactions.js';

export default function getTransactionsProcess({ databaseId, token }) {
  return (dispatch, getState) => {
    return getTransactions({ databaseId, token }).then(transactions => {
      dispatch({ type: 'SET_TRANSACTIONS', transactions });
      return transactions;
    });
  };
}
