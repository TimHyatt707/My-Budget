import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import TransactionPage from '../../components/TransactionPage';
import getTransactionsProcess from './../thunks/getTransactionsProcess';

function mapStateToProps(state, ownProps) {
  return {
    transactions: state.transactions,
    pageTitle: state.pageTitle,
    pages: state.pages,
    selectedTransactionIds: state.selectedTransactionIds
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return { onMount: () => dispatch(getTransactionsProcess()) };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(TransactionPage);
