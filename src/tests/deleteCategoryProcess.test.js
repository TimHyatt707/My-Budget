import deleteCategory from './../api/deleteCategory';
import deleteCategoryProcess from './../redux/thunks/deleteCategoryProcess';
jest.mock('./../api/deleteCategory');

let id = 3;

describe('DeleteCategoryProcess should call the API, delete a Category, and dispatch', () => {
  it('calls API,deletes Category, dispatch', () => {
    const thunk = deleteCategoryProcess();
    expect(typeof thunk).toBe('function');

    const dispatch = jest.fn();
    const getState = () => ({});
    deleteCategory.mockReturnValueOnce(Promise.resolve(id));
    return thunk(dispatch, getState).then(id => {
      expect(deleteCategory).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: 'DELETE_CATEGORY',
        id: id
      });
    });
  });
});
