import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import IndexPage from '../../components/IndexPage';
import getTransactionsProcess from './../thunks/getTransactionsProcess';
import getCategoriesProcess from './../thunks/getCategoriesProcess';

function mapStateToProps(state, ownProps) {
  return {
    transactions: state.transactions,
    pageTitle: state.pageTitle,
    pages: state.pages,
    categories: state.categories
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getTransactionsProcess()),
    onMountCategories: () => dispatch(getCategoriesProcess())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
    this.props.onMountCategories();
  }
});

export default compose(connectToStore, onDidMount)(IndexPage);
