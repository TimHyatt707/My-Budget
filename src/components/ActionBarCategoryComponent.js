import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CreateCategoryDialogComponent from './CreateCategoryDialogComponent';

export default class ActionBarCategoryComponent extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: 400,
          justifyContent: 'space-between'
        }}>
        <RaisedButton label="CREATE" onClick={this._onCreateCategoryHandler}>
          <CreateCategoryDialogComponent
            onOpenCreateCategoryDialog={this.props.onOpenCreateCategoryDialog}
            onShowCreateCategoryDialog={this.props.onShowCreateCategoryDialog}
            onCloseCreateCategoryDialog={this.props.onCloseCreateCategoryDialog}
            onSubmitCategory={this.props.onSubmitCategory}
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
