import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import BudgetPage from '../../components/BudgetPage';
import getCategoriesProcess from './../thunks/getCategoriesProcess';
import createCategoryProcess from './../thunks/createCategoryProcess';
import updateCategoryProcess from './../thunks/updateCategoryProcess';
import deleteCategoryProcess from './../thunks/deleteCategoryProcess';

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories,
    selectedCategoryIds: state.selectedCategoryIds,
    pageTitle: state.pageTitle,
    pages: state.pages,
    totalSpent: state.totalSpent,
    totalLimit: state.totalSpent,
    onShowCreateCategoryDialog: state.onShowCreateCategoryDialog,
    onShowUpdateCategoryDialog: state.onShowUpdateCategoryDialog
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getCategoriesProcess()),
    onOpenCreateCategoryDialog: () =>
      dispatch({ type: 'SHOW_CREATE_CATEGORY' }),
    onCloseCreateCategoryDialog: () =>
      dispatch({ type: 'CLOSE_CREATE_CATEGORY' }),
    onSubmitCategory: category => dispatch(createCategoryProcess(category)),
    onSelectCategory: id => dispatch({ type: 'SELECT_CATEGORY', id }),
    onDeselectCategory: id => dispatch({ type: 'DESELECT_CATEGORY', id }),
    onOpenUpdateCategoryDialog: () =>
      dispatch({ type: 'SHOW_UPDATE_CATEGORY' }),
    onCloseUpdateCategoryDialog: () =>
      dispatch({ type: 'CLOSE_UPDATE_CATEGORY' }),
    onUpdateCategory: (id, changes) =>
      dispatch(updateCategoryProcess(id, changes)),
    onOpenDeleteCategoryDialog: () =>
      dispatch({ type: 'SHOW_DELETE_CATEGORY' }),
    onCloseDeleteCategoryDialog: () =>
      dispatch({ type: 'CLOSE_DELETE_CATEGORY' }),
    onDeleteCategory: id => dispatch(deleteCategoryProcess(id))

    // onOpenUpdateCategoryDialog: () =>
    // dispatch({type: 'SHOW_UPDATE_CATEGORY'})
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(BudgetPage);
