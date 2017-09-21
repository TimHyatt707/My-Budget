import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CreateTransactionDialogComponent from './CreateTransactionDialogComponent';
import UpdateTransactionDialogComponent from './UpdateTransactionDialogComponent';

export default class ActionBarTransactionComponent extends Component {
  render() {
    let disabled = false;
    if (this.props.selectedTransactionIds.length === 0) {
      disabled = true;
    }
    return (
      <div
        style={{
          display: 'flex',
          width: 400,
          justifyContent: 'space-between'
        }}>
        <RaisedButton
          id="CREATE"
          label="CREATE"
          onClick={this._onCreateTransactionHandler}>
          <CreateTransactionDialogComponent
            onShowCreateTransactionDialog={
              this.props.onShowCreateTransactionDialog
            }
            onCloseCreateTransactionDialog={
              this.props.onCloseCreateTransactionDialog
            }
            onOpenCreateTransactionDialog={
              this.props.onOpenTransactionCategoryDialog
            }
            categories={this.props.categories}
            onSubmitTransaction={this.props.onSubmitTransaction}
          />
        </RaisedButton>
        <RaisedButton
          id="UPDATE"
          label="UPDATE"
          disabled={disabled}
          onClick={this._onUpdateTransactionHandler}>
          <UpdateTransactionDialogComponent
            onShowUpdateTransactionDialog={
              this.props.onShowUpdateTransactionDialog
            }
            onCloseUpdateTransactionDialog={
              this.props.onCloseUpdateTransactionDialog
            }
            onOpenUpdateTransactionDialog={
              this.props.onOpenUpdateTransactionDialog
            }
            onUpdateTransaction={this.props.onUpdateTransaction}
            categories={this.props.categories}
            selectedTransactionIds={this.props.selectedTransactionIds}
          />
        </RaisedButton>
        <RaisedButton
          id="DELETE"
          disabled={disabled}
          label="DELETE"
          onClick={this._onDeleteTransactionHandler}
        />
      </div>
    );
  }
  _onCreateTransactionHandler = () =>
    this.props.onOpenCreateTransactionDialog();
  _onUpdateTransactionHandler = () =>
    this.props.onOpenUpdateTransactionDialog();
  _onDeleteTransactionHandler = () =>
    this.props.selectedTransactionIds.forEach(id =>
      this.props.onDeleteTransaction(id)
    );
}
