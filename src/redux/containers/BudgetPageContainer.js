import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import BudgetPage from '../../components/BudgetPage';
import getCategoriesProcess from './../thunks/getCategoriesProcess';
import createCategoryProcess from './../thunks/createCategoryProcess';

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories,
    pageTitle: state.pageTitle,
    pages: state.pages,
    totalSpent: state.totalSpent,
    totalLimit: state.totalSpent,
    onShowCreateCategoryDialog: state.onShowCreateCategoryDialog
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getCategoriesProcess()),
    onOpenCreateCategoryDialog: () =>
      dispatch({ type: 'SHOW_CREATE_CATEGORY' }),
    onCloseCreateCategoryDialog: () =>
      dispatch({ type: 'CLOSE_CREATE_CATEGORY' }),
    onSubmitCategory: category => dispatch(createCategoryProcess(category))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(BudgetPage);
