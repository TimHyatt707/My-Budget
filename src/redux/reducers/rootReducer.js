export default function rootReducer(
  currentState = {
    transactions: [],
    selectedTransactionIds: [],
    categories: [],
    selectedCategoryIds: [],
    pageTitle: '',
    pages: ['Home Page', 'Budget Page', 'Transaction Page'],
    chartData: null,
    totalSpent: 0,
    totalLimit: 0,
    onShowCreateCategoryDialog: false
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
      return { ...currentState, onShowCreateCategoryDialog: null };
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
          Id => Id === action.id
        )
      };
    default:
      return currentState;
  }
}
