import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import BudgetPage from "../../components/BudgetPage";
import getCategoriesProcess from "./../thunks/getCategoriesProcess";
import getTransactionsProcess from "./../thunks/getTransactionsProcess";
import createCategoryProcess from "./../thunks/createCategoryProcess";
import updateCategoryProcess from "./../thunks/updateCategoryProcess";
import deleteCategoryProcess from "./../thunks/deleteCategoryProcess";
import getAuthenticationProcess from "./../thunks/getAuthenticationProcess";

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
    currentSort: state.currentSort,
    token: state.token,
    authenticatedUserId: state.authenticatedUserId
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getAuthenticationProcess()),
    onMountCategories: (id, token) => dispatch(getCategoriesProcess(id, token)),
    onMountTransactions: (id, token) =>
      dispatch(getTransactionsProcess(id, token)),
    onOpenCreateCategoryDialog: () =>
      dispatch({ type: "SHOW_CREATE_CATEGORY" }),
    onCloseCreateCategoryDialog: () =>
      dispatch({ type: "CLOSE_CREATE_CATEGORY" }),
    onSubmitCategory: (id, category, token) =>
      dispatch(createCategoryProcess(id, category, token)),
    onSelectCategory: id => dispatch({ type: "SELECT_CATEGORY", id }),
    onDeselectCategory: id => dispatch({ type: "DESELECT_CATEGORY", id }),
    onOpenUpdateCategoryDialog: () =>
      dispatch({ type: "SHOW_UPDATE_CATEGORY" }),
    onCloseUpdateCategoryDialog: () =>
      dispatch({ type: "CLOSE_UPDATE_CATEGORY" }),
    onUpdateCategory: (id, changes, token) =>
      dispatch(updateCategoryProcess(id, changes, token)),
    onOpenDeleteCategoryDialog: () =>
      dispatch({ type: "SHOW_DELETE_CATEGORY" }),
    onCloseDeleteCategoryDialog: () =>
      dispatch({ type: "CLOSE_DELETE_CATEGORY" }),
    onSortCategoryName: () => dispatch({ type: "TOGGLE_SORT" }),
    onDeleteCategory: (id, token) => dispatch(deleteCategoryProcess(id, token))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  async componentDidMount() {
    await this.props.onMount();
    await this.props.onMountCategories(
      this.props.authenticatedUserId,
      this.props.token
    );
    await this.props.onMountTransactions(
      this.props.authenticatedUserId,
      this.props.token
    );
  }
});

export default compose(connectToStore, onDidMount)(BudgetPage);
