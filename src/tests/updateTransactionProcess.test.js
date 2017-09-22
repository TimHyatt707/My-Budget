import updateTransaction from './../api/updateTransaction';
import updateTransactionProcess from './../redux/thunks/updateTransactionProcess';
jest.mock('./../api/updateTransaction');

let Id = 2;
let changes = {};
let databaseId = '123213';
let token = '12213';

describe('updateTransactionProcess should call the API, change data, and dispatch', () => {
  //>>>>>>>>>>>>>>>>>>>>>>>>>>
  it('calls API', () => {
    const thunk = updateTransactionProcess(Id, changes, { databaseId, token });
    expect(typeof thunk).toBe('function');
    changes.amountSpent = 300;

    const dispatch = jest.fn();
    const getState = () => ({});
    updateTransaction.mockReturnValueOnce(Promise.resolve(Id, changes));
    return thunk(dispatch, getState).then(transaction => {
      expect(updateTransaction).toBeCalled();
      expect(Id).toEqual(Id);
      expect(dispatch).toBeCalledWith({
        type: 'UPDATE_TRANSACTION',
        transaction: transaction
      });
    });
  });
});
