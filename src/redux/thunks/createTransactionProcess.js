import createTransaction from './../../api/createTransaction.js';

export default function createTransactionProcess(transaction) {
  return (dispatch, getState) => {
    return createTransaction(transaction).then(transaction => {
      dispatch({ type: 'ADD_TRANSACTION', transaction });
      return transaction;
    });
  };
}
