export default function rootReducer(
  currentState = {
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
    currentSort: false,
    budgetDisplayData: []
  },
  action
) {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return { ...currentState, transactions: action.transactions };
    case 'SET_CATEGORIES':
      return { ...currentState, categories: action.categories };
    case 'SHOW_CREATE_CATEGORY':
      return { ...currentState, onShowCreateCategoryDialog: true };
    case 'CLOSE_CREATE_CATEGORY':
      return { ...currentState, onShowCreateCategoryDialog: false };
    case 'ADD_CATEGORY':
      return {
        ...currentState,
        categories: [...currentState.categories, action.category]
      };
    case 'SELECT_CATEGORY':
      return {
        ...currentState,
        selectedCategoryIds: [...currentState.selectedCategoryIds, action.id]
      };
    // case 'SHOW_UPDATE_CATEGORY':
    //   return {...currentState, }
    case 'DESELECT_CATEGORY':
      return {
        ...currentState,
        selectedCategoryIds: currentState.selectedCategoryIds.filter(
          Id => Id !== action.id
        )
      };
    case 'SHOW_UPDATE_CATEGORY':
      return { ...currentState, onShowUpdateCategoryDialog: true };
    case 'CLOSE_UPDATE_CATEGORY':
      return { ...currentState, onShowUpdateCategoryDialog: false };
    case 'UPDATE_CATEGORY':
      return {
        ...currentState,
        categories: currentState.categories.map(
          category =>
            category.id === action.category.id ? action.category : category
        )
      };
    case 'DELETE_CATEGORY':
      return {
        ...currentState,
        categories: currentState.categories.filter(
          category => category.id !== action.id.id
        )
      };
    case 'OPEN_CREATE_TRANSACTION':
      return {
        ...currentState,
        onShowCreateTransactionDialog: true
      };
    case 'CLOSE_CREATE_TRANSACTION':
      return {
        ...currentState,
        onShowCreateTransactionDialog: false
      };
    case 'ADD_TRANSACTION':
      return {
        ...currentState,
        transactions: [...currentState.transactions, action.transaction]
      };
    case 'SELECT_TRANSACTION':
      return {
        ...currentState,
        selectedTransactionIds: [
          ...currentState.selectedTransactionIds,
          action.id
        ]
      };
    case 'DESELECT_TRANSACTION':
      return {
        ...currentState,
        selectedTransactionIds: currentState.selectedTransactionIds.filter(
          Id => Id !== action.id
        )
      };
    case 'OPEN_UPDATE_TRANSACTION':
      return {
        ...currentState,
        onShowUpdateTransactionDialog: true
      };
    case 'CLOSE_UPDATE_TRANSACTION':
      return {
        ...currentState,
        onShowUpdateTransactionDialog: false
      };
    case 'UPDATE_TRANSACTION':
      return {
        ...currentState,
        transactions: currentState.transactions.map(
          transaction =>
            transaction.id === action.transaction.id
              ? action.transaction
              : transaction
        )
      };
    case 'DELETE_TRANSACTION':
      return {
        ...currentState,
        transactions: currentState.transactions.filter(
          transaction => transaction.id !== action.id.id
        )
      };
    case 'TOGGLE_SORT':
      return {
        ...currentState,
        currentSort: true
      };
    default:
      return currentState;
  }
}
