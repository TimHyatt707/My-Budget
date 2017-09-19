import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CreateCategoryDialogComponent from './CreateCategoryDialogComponent';

export default class ActionBarCategoryComponent extends Component {
  render() {
    const {
      onShowCreateCategoryDialog,
      onOpenCreateCategoryDialog,
      onCloseCreateCategoryDialog,
      onSubmitCategory,
      onOpenUpdateCategoryDialog,
      onDeleteCategory
    } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          width: 400,
          justifyContent: 'space-between'
        }}>
        <RaisedButton label="CREATE" onClick={this._onCreateCategoryHandler}>
          <CreateCategoryDialogComponent
            onOpenCreateCategoryDialog={onOpenCreateCategoryDialog}
            onShowCreateCategoryDialog={onShowCreateCategoryDialog}
            onCloseCreateCategoryDialog={onCloseCreateCategoryDialog}
            onSubmitCategory={onSubmitCategory}
          />
        </RaisedButton>
        <RaisedButton label="UPDATE" onClick={this._onUpdateCategoryHandler} />
        <RaisedButton label="DELETE" onClick={this._onDeleteCategoryHandler} />
      </div>
    );
  }
  _onCreateCategoryHandler = () => this.props.onOpenCreateCategoryDialog();
  _onUpdateCategoryHandler = () => this.props.onOpenUpdateCategoryDialog();
  _onDeleteCategoryHandler = () => this.props.onDeleteCategory();
}