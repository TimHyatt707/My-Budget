import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import IndexPage from "../../components/IndexPage";
import getTransactionsProcess from "./../thunks/getTransactionsProcess";
import getCategoriesProcess from "./../thunks/getCategoriesProcess";
import getAuthenticationProcess from "./../thunks/getAuthenticationProcess";

function mapStateToProps(state, ownProps) {
  return {
    transactions: state.transactions,
    pageTitle: state.pageTitle,
    pages: state.pages,
    categories: state.categories,
    token: state.token
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getAuthenticationProcess()),
    onMountTransactions: (id, token) =>
      dispatch(getTransactionsProcess(id, token)),
    onMountCategories: (id, token) => dispatch(getCategoriesProcess(id, token)),
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

export default compose(connectToStore, onDidMount)(IndexPage);
