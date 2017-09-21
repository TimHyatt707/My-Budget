import updateTransaction from './../../api/updateTransaction';

export default function updateTransactionProcess(id, changes) {
  return (dispatch, getState) => {
    return updateTransaction(id, changes).then(transaction => {
      dispatch({ type: 'UPDATE_TRANSACTION', transaction });
      return transaction;
    });
  };
}
