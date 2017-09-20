import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CreateCategoryDialogComponent from './CreateCategoryDialogComponent';
import UpdateCategoryDialogComponent from './UpdateCategoryDialogComponent';

export default class ActionBarCategoryComponent extends Component {
  constructor(props) {
    super(props);
    this._onDeleteCategoryHandler = this._onDeleteCategoryHandler.bind(this);
  }
  render() {
    let disabled = false;
    if (this.props.selectedCategoryIds.length === 0) {
      disabled = true;
    }
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
        <RaisedButton
          label="UPDATE"
          disabled={disabled}
          onClick={this._onUpdateCategoryHandler}>
          <UpdateCategoryDialogComponent
            onOpenUpdateCategoryDialog={this.props.onOpenUpdateCategoryDialog}
            onCloseUpdateCategoryDialog={this.props.onCloseUpdateCategoryDialog}
            onShowUpdateCategoryDialog={this.props.onShowUpdateCategoryDialog}
            onUpdateCategory={this.props.onUpdateCategory}
            selectedCategoryIds={this.props.selectedCategoryIds}
          />
        </RaisedButton>
        <RaisedButton
          label="DELETE"
          disabled={disabled}
          onClick={this._onDeleteCategoryHandler}
        />
      </div>
    );
  }
  _onCreateCategoryHandler = () => this.props.onOpenCreateCategoryDialog();
  _onUpdateCategoryHandler = () => this.props.onOpenUpdateCategoryDialog();
  _onDeleteCategoryHandler() {
    this.props.selectedCategoryIds.forEach(id =>
      this.props.onDeleteCategory(id)
    );
  }
}
