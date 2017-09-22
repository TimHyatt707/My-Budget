import createCategory from './../api/createCategory';
import createCategoryProcess from './../redux/thunks/createCategoryProcess';
jest.mock('./../api/createCategory');

let databaseId = '123213';
let token = '12213';
let object = {
  id: 0,
  category: 'Food',
  amountSpent: 100,
  limit: 200
};

describe('createCategoryProcess should call the API, get correct data, and dispatch', () => {
  it('calls API,return data, dispatch', () => {
    const thunk = createCategoryProcess(object, { databaseId, token });
    expect(typeof thunk).toBe('function');

    const dispatch = jest.fn();
    const getState = () => ({});
    createCategory.mockReturnValueOnce(Promise.resolve(object));
    return thunk(dispatch, getState).then(category => {
      expect(createCategory).toBeCalled();
      expect(category).toEqual(object);
      expect(dispatch).toBeCalledWith({
        type: 'ADD_CATEGORY',
        category: category
      });
    });
  });
});
