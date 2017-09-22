import createTransaction from './../api/createTransaction';
import createTransactionProcess from './../redux/thunks/createTransactionProcess';
jest.mock('./../api/createTransaction');

let object = {
  id: 0,
  category: 'Food',
  amountSpent: 20,
  name: 'Pizza',
  timestamp: '2017-08-06'
};
let databaseId = '123213';
let token = '12213';
describe('createTransactionProcess should call the API, get correct data, and dispatch', () => {
  it('calls API,return data, dispatch', () => {
    const thunk = createTransactionProcess(object, { databaseId, token });
    expect(typeof thunk).toBe('function');

    const dispatch = jest.fn();
    const getState = () => ({});
    createTransaction.mockReturnValueOnce(Promise.resolve(object));
    return thunk(dispatch, getState).then(transaction => {
      expect(createTransaction).toBeCalled();
      expect(transaction).toEqual(object);
      expect(dispatch).toBeCalledWith({
        type: 'ADD_TRANSACTION',
        transaction: transaction
      });
    });
  });
});
