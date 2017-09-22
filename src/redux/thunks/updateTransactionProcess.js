import updateTransaction from './../../api/updateTransaction';

export default function updateTransactionProcess(
  id,
  changes,
  { databaseId, token }
) {
  return (dispatch, getState) => {
    return updateTransaction(id, changes, {
      databaseId,
      token
    }).then(transaction => {
      dispatch({ type: 'UPDATE_TRANSACTION', transaction });
      return transaction;
    });
  };
}
