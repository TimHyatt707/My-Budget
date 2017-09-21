import updateCategory from './../api/updateCategory';
import updateCategoryProcess from './../redux/thunks/updateCategoryProcess';
jest.mock('./../api/updateCategory');

let Id = 2;
let changes = {};

describe('updateCategoryProcess should call the API, change data, and dispatch', () => {
  //>>>>>>>>>>>>>>>>>>>>>>>>>>
  it('calls API', () => {
    const thunk = updateCategoryProcess();
    expect(typeof thunk).toBe('function');
    changes.limit = 300;

    const dispatch = jest.fn();
    const getState = () => ({});
    updateCategory.mockReturnValueOnce(Promise.resolve(Id, changes));
    return thunk(dispatch, getState).then(category => {
      expect(updateCategory).toBeCalled();
      expect(Id).toEqual(Id);
      expect(dispatch).toBeCalledWith({
        type: 'UPDATE_CATEGORY',
        category: category
      });
    });
  });
});
