import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

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
    onMount: () => dispatch(getTransactionsProcess()),
    onMountCategories: () => dispatch(getCategoriesProcess()),
    onOpenCreateTransactionDialog: () =>
      dispatch({ type: 'OPEN_CREATE_TRANSACTION' }),
    onCloseCreateTransactionDialog: () =>
      dispatch({ type: 'CLOSE_CREATE_TRANSACTION' }),
    onSubmitTransaction: transaction =>
      dispatch(createTransactionProcess(transaction)),
    onSelectTransaction: id => dispatch({ type: 'SELECT_TRANSACTION', id }),
    onDeselectTransaction: id => dispatch({ type: 'DESELECT_TRANSACTION', id }),
    onOpenUpdateTransactionDialog: () =>
      dispatch({ type: 'OPEN_UPDATE_TRANSACTION' }),
    onCloseUpdateTransactionDialog: () =>
      dispatch({ type: 'CLOSE_UPDATE_TRANSACTION' }),
    onUpdateTransaction: (id, transaction) =>
      dispatch(updateTransactionProcess(id, transaction)),
    onDeleteTransaction: id => dispatch(deleteTransactionProcess(id))
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
