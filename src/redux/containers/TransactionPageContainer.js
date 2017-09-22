import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import env from './../../env';
import TransactionPage from '../../components/TransactionPage';
import getTransactionsProcess from './../thunks/getTransactionsProcess';
import getCategoriesProcess from './../thunks/getCategoriesProcess';
import createTransactionProcess from './../thunks/createTransactionProcess';
import updateTransactionProcess from './../thunks/updateTransactionProcess';
import deleteTransactionProcess from './../thunks/deleteTransactionProcess';

function mapStateToProps(state, ownProps) {
  return {
    transactions: state.transactions,
    pageTitle: state.pageTitle,
    pages: state.pages,
    selectedTransactionIds: state.selectedTransactionIds,
    categories: state.categories,
    onShowCreateTransactionDialog: state.onShowCreateTransactionDialog,
    onShowUpdateTransactionDialog: state.onShowUpdateTransactionDialog
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () =>
      dispatch(
        getTransactionsProcess({
          databaseId: env.AIRTABLE_DATABASE_TRANSACTION_ID,
          token: env.AIRTABLE_TOKEN
        })
      ),
    onMountCategories: () =>
      dispatch(
        getCategoriesProcess({
          databaseId: env.AIRTABLE_DATABASE_CATEGORY_ID,
          token: env.AIRTABLE_TOKEN
        })
      ),
    onOpenCreateTransactionDialog: () =>
      dispatch({ type: 'OPEN_CREATE_TRANSACTION' }),
    onCloseCreateTransactionDialog: () =>
      dispatch({ type: 'CLOSE_CREATE_TRANSACTION' }),
    onSubmitTransaction: transaction =>
      dispatch(
        createTransactionProcess(transaction, {
          databaseId: env.AIRTABLE_DATABASE_TRANSACTION_ID,
          token: env.AIRTABLE_TOKEN
        })
      ),
    onSelectTransaction: id => dispatch({ type: 'SELECT_TRANSACTION', id }),
    onDeselectTransaction: id => dispatch({ type: 'DESELECT_TRANSACTION', id }),
    onOpenUpdateTransactionDialog: () =>
      dispatch({ type: 'OPEN_UPDATE_TRANSACTION' }),
    onCloseUpdateTransactionDialog: () =>
      dispatch({ type: 'CLOSE_UPDATE_TRANSACTION' }),
    onUpdateTransaction: (id, transaction) =>
      dispatch(
        updateTransactionProcess(id, transaction, {
          databaseId: env.AIRTABLE_DATABASE_TRANSACTION_ID,
          token: env.AIRTABLE_TOKEN
        })
      ),
    onDeleteTransaction: id =>
      dispatch(
        deleteTransactionProcess(id, {
          databaseId: env.AIRTABLE_DATABASE_TRANSACTION_ID,
          token: env.AIRTABLE_TOKEN
        })
      )
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
    this.props.onMountCategories();
  }
});

export default compose(connectToStore, onDidMount)(TransactionPage);
