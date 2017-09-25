import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import env from './../../env';
import BudgetPage from '../../components/BudgetPage';
import getCategoriesProcess from './../thunks/getCategoriesProcess';
import getTransactionsProcess from './../thunks/getTransactionsProcess';
import createCategoryProcess from './../thunks/createCategoryProcess';
import updateCategoryProcess from './../thunks/updateCategoryProcess';
import deleteCategoryProcess from './../thunks/deleteCategoryProcess';

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories,
    transactions: state.transactions,
    selectedCategoryIds: state.selectedCategoryIds,
    pageTitle: state.pageTitle,
    pages: state.pages,
    totalSpent: state.totalSpent,
    totalLimit: state.totalSpent,
    onShowCreateCategoryDialog: state.onShowCreateCategoryDialog,
    onShowUpdateCategoryDialog: state.onShowUpdateCategoryDialog,
    currentSort: state.currentSort
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () =>
      dispatch(
        getCategoriesProcess({
          databaseId: env.AIRTABLE_DATABASE_CATEGORY_ID,
          token: env.AIRTABLE_TOKEN
        })
      ),
    onMountTransactions: () =>
      dispatch(
        getTransactionsProcess({
          databaseId: env.AIRTABLE_DATABASE_TRANSACTION_ID,
          token: env.AIRTABLE_TOKEN
        })
      ),
    onOpenCreateCategoryDialog: () =>
      dispatch({ type: 'SHOW_CREATE_CATEGORY' }),
    onCloseCreateCategoryDialog: () =>
      dispatch({ type: 'CLOSE_CREATE_CATEGORY' }),
    onSubmitCategory: category =>
      dispatch(
        createCategoryProcess(category, {
          databaseId: env.AIRTABLE_DATABASE_CATEGORY_ID,
          token: env.AIRTABLE_TOKEN
        })
      ),
    onSelectCategory: id => dispatch({ type: 'SELECT_CATEGORY', id }),
    onDeselectCategory: id => dispatch({ type: 'DESELECT_CATEGORY', id }),
    onOpenUpdateCategoryDialog: () =>
      dispatch({ type: 'SHOW_UPDATE_CATEGORY' }),
    onCloseUpdateCategoryDialog: () =>
      dispatch({ type: 'CLOSE_UPDATE_CATEGORY' }),
    onUpdateCategory: (id, changes) =>
      dispatch(
        updateCategoryProcess(id, changes, {
          databaseId: env.AIRTABLE_DATABASE_CATEGORY_ID,
          token: env.AIRTABLE_TOKEN
        })
      ),
    onOpenDeleteCategoryDialog: () =>
      dispatch({ type: 'SHOW_DELETE_CATEGORY' }),
    onCloseDeleteCategoryDialog: () =>
      dispatch({ type: 'CLOSE_DELETE_CATEGORY' }),
    onSortCategoryName: () => dispatch({ type: 'TOGGLE_SORT' }),
    onDeleteCategory: id =>
      dispatch(
        deleteCategoryProcess(id, {
          databaseId: env.AIRTABLE_DATABASE_CATEGORY_ID,
          token: env.AIRTABLE_TOKEN
        })
      )
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
    this.props.onMountTransactions();
  }
});

export default compose(connectToStore, onDidMount)(BudgetPage);
