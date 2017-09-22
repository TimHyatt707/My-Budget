import deleteTransaction from './../api/deleteTransaction';
import deleteTransactionProcess from './../redux/thunks/deleteTransactionProcess';
jest.mock('./../api/deleteTransaction');

let id = 3;
let databaseId = '123213';
let token = '12213';

describe('deleteTransactionProcess should call the API, delete a Transaction, and dispatch', () => {
  it('calls API,deletes Transaction, dispatch', () => {
    const thunk = deleteTransactionProcess(id, { databaseId, token });
    expect(typeof thunk).toBe('function');

    const dispatch = jest.fn();
    const getState = () => ({});
    deleteTransaction.mockReturnValueOnce(Promise.resolve(id));
    return thunk(dispatch, getState).then(id => {
      expect(deleteTransaction).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: 'DELETE_TRANSACTION',
        id: id
      });
    });
  });
});
