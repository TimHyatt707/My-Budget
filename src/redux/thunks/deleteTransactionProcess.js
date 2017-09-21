import deleteTransaction from './../../api/deleteTransaction.js';

export default function deleteTransactionProcess(id) {
  return (dispatch, getState) => {
    return deleteTransaction(id).then(id => {
      dispatch({ type: 'DELETE_TRANSACTION', id });
      return id;
    });
  };
}
