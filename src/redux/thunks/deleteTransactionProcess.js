import deleteTransaction from './../../api/deleteTransaction.js';

export default function deleteTransactionProcess(id, { databaseId, token }) {
  return (dispatch, getState) => {
    return deleteTransaction(id, { databaseId, token }).then(id => {
      dispatch({ type: 'DELETE_TRANSACTION', id });
      return id;
    });
  };
}
