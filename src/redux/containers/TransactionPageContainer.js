import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import TransactionPage from "../../components/TransactionPage";
import getTransactionsProcess from "./../thunks/getTransactionsProcess";
import getCategoriesProcess from "./../thunks/getCategoriesProcess";
import createTransactionProcess from "./../thunks/createTransactionProcess";
import updateTransactionProcess from "./../thunks/updateTransactionProcess";
import deleteTransactionProcess from "./../thunks/deleteTransactionProcess";
import getAuthenticationProcess from "./../thunks/getAuthenticationProcess";

function mapStateToProps(state, ownProps) {
  return {
    transactions: state.transactions,
    pageTitle: state.pageTitle,
    pages: state.pages,
    selectedTransactionIds: state.selectedTransactionIds,
    categories: state.categories,
    onShowCreateTransactionDialog: state.onShowCreateTransactionDialog,
    onShowUpdateTransactionDialog: state.onShowUpdateTransactionDialog,
    token: state.token,
    userId: state.userId
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getAuthenticationProcess()),
    onMountTransactions: (id, token) =>
      dispatch(getTransactionsProcess(id, token)),
    onMountCategories: (id, token) => dispatch(getCategoriesProcess(token)),
    onOpenCreateTransactionDialog: () =>
      dispatch({ type: "OPEN_CREATE_TRANSACTION" }),
    onCloseCreateTransactionDialog: () =>
      dispatch({ type: "CLOSE_CREATE_TRANSACTION" }),
    onSubmitTransaction: (id, transaction, token) =>
      dispatch(createTransactionProcess(id, transaction, token)),
    onSelectTransaction: id => dispatch({ type: "SELECT_TRANSACTION", id }),
    onDeselectTransaction: id => dispatch({ type: "DESELECT_TRANSACTION", id }),
    onOpenUpdateTransactionDialog: () =>
      dispatch({ type: "OPEN_UPDATE_TRANSACTION" }),
    onCloseUpdateTransactionDialog: () =>
      dispatch({ type: "CLOSE_UPDATE_TRANSACTION" }),
    onUpdateTransaction: (id, transaction, token) =>
      dispatch(updateTransactionProcess(id, transaction, token)),
    onDeleteTransaction: (id, authenticatedUserId, token) =>
      dispatch(deleteTransactionProcess(id, token)),
    onLogoutUser: () => dispatch({ type: "LOGOUT_USER" })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  async componentDidMount() {
    await this.props.onMount();
    await this.props.onMountTransactions(this.props.userId, this.props.token);
    await this.props.onMountCategories(this.props.userId, this.props.token);
  }
});

export default compose(connectToStore, onDidMount)(TransactionPage);
