import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CreateTransactionDialogComponent from './CreateTransactionDialogComponent';

export default class ActionBarTransactionComponent extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: 400,
          justifyContent: 'space-between'
        }}>
        <RaisedButton label="CREATE" onClick={this._onCreateTransactionHandler}>
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
          label="UPDATE"
          onClick={this._onUpdateTransactionHandler}
        />
        <RaisedButton
          label="DELETE"
          onClick={this._onDeleteTransactionHandler}
        />
      </div>
    );
  }
  _onCreateTransactionHandler = () =>
    this.props.onOpenCreateTransactionDialog();
  _onUpdateTransactionHandler = () => console.log('_onUpdate');
  _onDeleteTransactionHandler = () => console.log('_onDelete');
}
