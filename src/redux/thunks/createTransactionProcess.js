import createTransaction from './../../api/createTransaction.js';

export default function createTransactionProcess(
  transaction,
  { databaseId, token }
) {
  return (dispatch, getState) => {
    return createTransaction(transaction, {
      databaseId,
      token
    }).then(transaction => {
      dispatch({ type: 'ADD_TRANSACTION', transaction });
      return transaction;
    });
  };
}
