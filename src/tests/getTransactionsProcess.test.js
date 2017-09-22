import getTransactionsProcess from './../redux/thunks/getTransactionsProcess';
import getTransactions from './../api/getTransactions';
jest.mock('./../api/getTransactions');

let data = [
  {
    id: 1,
    category: 'Food',
    amountSpent: 100,
    name: 'Groceries',
    timestamp: '2017-08-06'
  },
  {
    id: 1,
    category: 'Transportation',
    amountSpent: 30,
    name: 'Gasoline',
    timestamp: '2017-08-06'
  }
];

let databaseId = '123213';
let token = '12213';

describe('getTransactionsProcess should call the API, get correct data, and dispatch', () => {
  it('calls API,return data, dispatch', () => {
    const thunk = getTransactionsProcess({ databaseId, token });
    expect(typeof thunk).toBe('function');

    const dispatch = jest.fn();
    const getState = () => ({});
    getTransactions.mockReturnValueOnce(Promise.resolve([...data]));
    return thunk(dispatch, getState).then(transactions => {
      expect(getTransactions).toBeCalled();
      expect(transactions).toEqual([...data]);
      expect(dispatch).toBeCalledWith({
        type: 'SET_TRANSACTIONS',
        transactions: transactions
      });
    });
  });
});
