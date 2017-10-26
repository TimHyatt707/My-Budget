import rootReducer from './../redux/reducers/rootReducer';

let categories = [
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
let category = {
  id: 1,
  category: 'Food',
  amountSpent: 100,
  limit: 200
};
let transactions = [
  {
    id: 0,
    category: 'Food',
    amountSpent: 10,
    name: 'Chicken',
    timestamp: '2017-08-12'
  }
];
let transaction = {
  id: 0,
  category: 'Food',
  amountSpent: 10,
  name: 'Chicken',
  timestamp: '2017-08-12'
};
let initialState = rootReducer(undefined, {});
let newState = rootReducer(initialState, 'SHOW_CREATE_CATEGORY');
let normalState = rootReducer(initialState, {
  type: 'ADD_CATEGORY',
  category
});

describe('test reducer', () => {
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>
  it('should return initial state', () => {
    expect(initialState).toEqual(rootReducer(undefined, {}));
  });
  it('should handle SET_CATEGORIES', () => {
    expect(
      rootReducer(initialState, { type: 'SET_CATEGORIES', categories })
    ).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: categories,

      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle SET_TRANSACTIONS', () => {
    expect(
      rootReducer(initialState, { type: 'SET_TRANSACTIONS', transactions })
    ).toEqual({
      transactions: transactions,
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle SHOW_CREATE_CATEGORY', () => {
    expect(
      rootReducer(initialState, { type: 'SHOW_CREATE_CATEGORY' })
    ).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: true,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle CLOSE_CREATE_CATEGORY', () => {
    expect(rootReducer(newState, { type: 'CLOSE_CREATE_CATEGORY' })).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle ADD_CATEGORY', () => {
    expect(
      rootReducer(initialState, { type: 'ADD_CATEGORY', category })
    ).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [category],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle SELECT_CATEGORY', () => {
    let id = 3;
    expect(rootReducer(initialState, { type: 'SELECT_CATEGORY', id })).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [3],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle DESELECT_CATEGORY', () => {
    let id = 3;
    let newerState = rootReducer(initialState, { type: 'SELECT_CATEGORY', id });
    expect(rootReducer(newerState, { type: 'DESELECT_CATEGORY', id })).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle ADD_CATEGORY', () => {
    // let normalState = rootReducer(initialState, {
    //   type: 'ADD_CATEGORY',
    //   category
    // });
    expect(
      rootReducer(initialState, { type: 'ADD_CATEGORY', category })
    ).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [category],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle UPDATE_CATEGORY', () => {
    expect(
      rootReducer(normalState, { type: 'UPDATE_CATEGORY', category })
    ).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [category],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle DELETE_CATEGORY', () => {
    let id = { id: 1 };
    // let normalState = rootReducer(initialState, {
    //   type: 'ADD_CATEGORY',
    //   category
    // });
    expect(
      rootReducer(
        {
          transactions: [],
          selectedTransactionIds: [],
          categories: [category],
          selectedCategoryIds: [1],
          pageTitle: '',
          pages: ['Home Page', 'Budget Page', 'Transaction Page'],
          totalSpent: 0,
          totalLimit: 0,
          onShowCreateCategoryDialog: false,
          onShowUpdateCategoryDialog: false,
          onShowCreateTransactionDialog: false,
          onShowUpdateTransactionDialog: false,
          budgetDisplayData: [],
          currentSort: false
        },
        { type: 'DELETE_CATEGORY', id }
      )
    ).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [1],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle type eror', () => {
    expect(rootReducer(initialState, { type: 'LAMBO_MERCY' })).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle OPEN_CREATE_TRANSACTION', () => {
    expect(
      rootReducer(initialState, { type: 'OPEN_CREATE_TRANSACTION' })
    ).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: true,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle CLOSE_CREATE_TRANSACTION', () => {
    expect(
      rootReducer(initialState, { type: 'CLOSE_CREATE_TRANSACTION' })
    ).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle OPEN_UPDATE_TRANSACTION', () => {
    expect(
      rootReducer(initialState, { type: 'CLOSE_UPDATE_TRANSACTION' })
    ).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle ADD_TRANSACTION', () => {
    expect(
      rootReducer(initialState, { type: 'ADD_TRANSACTION', transaction })
    ).toEqual({
      transactions: [transaction],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
  it('should handle DELETE_TRANSACTION', () => {
    let id = 3;
    expect(
      rootReducer(initialState, { type: 'DELETE_TRANSACTION', id })
    ).toEqual({
      transactions: [],
      selectedTransactionIds: [],
      categories: [],
      selectedCategoryIds: [],
      pageTitle: '',
      pages: ['Home Page', 'Budget Page', 'Transaction Page'],
      totalSpent: 0,
      totalLimit: 0,
      onShowCreateCategoryDialog: false,
      onShowUpdateCategoryDialog: false,
      onShowCreateTransactionDialog: false,
      onShowUpdateTransactionDialog: false,
      budgetDisplayData: [],
      currentSort: false
    });
  });
});
