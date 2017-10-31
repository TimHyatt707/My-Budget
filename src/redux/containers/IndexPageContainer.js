import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import env from "./../../env";
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
    token: state.token,
    authenticatedUserId: state.authenticatedUserId
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getAuthenticationProcess()),
    onMountTransactions: () =>
      dispatch(
        getTransactionsProcess(ownProps.authenticatedUserId, {
          API_BASE_URL: env.API_BASE_URL
        })
      ),
    onMountCategories: () =>
      dispatch(
        getCategoriesProcess(ownProps.authenticatedUserId, {
          API_BASE_URL: env.API_BASE_URL
        })
      )
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
    this.props.onMountTransactions();
    this.props.onMountCategories();
  }
});

export default compose(connectToStore, onDidMount)(IndexPage);
