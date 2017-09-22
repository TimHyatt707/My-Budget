import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import env from './../../env';
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

export default compose(connectToStore, onDidMount)(IndexPage);
