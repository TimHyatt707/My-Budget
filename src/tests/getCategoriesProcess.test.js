import getCategoriesProcess from './../redux/thunks/getCategoriesProcess';
import getCategories from './../api/getCategories';
jest.mock('./../api/getCategories');

let data = [
  {
    id: 1,
    category: 'Food',
    amountSpent: 100,
    limit: 200
  },
  {
    id: 2,
    category: 'Entertainment',
    amountSpent: 12,
    limit: 50
  }
];
let databaseId = '123213';
let token = '12213';

describe('getCategoriesProcess should call the API, get correct data, and dispatch', () => {
  it('calls API,return data, dispatch', () => {
    const thunk = getCategoriesProcess({ databaseId, token });
    expect(typeof thunk).toBe('function');

    const dispatch = jest.fn();
    const getState = () => ({});
    getCategories.mockReturnValueOnce(Promise.resolve([...data]));
    return thunk(dispatch, getState).then(categories => {
      expect(getCategories).toBeCalled();
      expect(categories).toEqual([...data]);
      expect(dispatch).toBeCalledWith({
        type: 'SET_CATEGORIES',
        categories: categories
      });
    });
  });
});
