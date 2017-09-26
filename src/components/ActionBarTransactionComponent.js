import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CreateTransactionDialogComponent from './CreateTransactionDialogComponent';
import UpdateTransactionDialogComponent from './UpdateTransactionDialogComponent';

export default class ActionBarTransactionComponent extends Component {
  render() {
    let disabled = false;
    if (this.props.selectedTransactionIds.length === 0) {
      disabled = true;
    }
    return (
      <div>
        <form onSubmit={this._onSubmitHandler}>
          <TextField
            style={{ marginRight: 20, marginBottom: 20 }}
            id="SearchBar"
            hintText="Search for transaction by name"
            hintStyle={{ color: 'grey' }}
            inputStyle={{ color: 'black' }}
          />
          <RaisedButton
            type="submit"
            label="GO"
            style={{
              width: '20px',
              marginTop: '10px'
            }}
          />
        </form>
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
  _onSubmitHandler = event => {
    event.preventDefault();
    const $form = event.target;
    let query = $form.SearchBar.value.toLowerCase();
    let pattern = new RegExp(query);
    let listOfTransactions = this.props.transactions;
    if (!listOfTransactions) {
      alert('No transactions to display');
    } else {
      for (let i = 0; i < listOfTransactions.length; i++) {
        let string = listOfTransactions[i].name.toLowerCase();
        if (string.search(pattern) !== -1) {
          this.props.onSelectTransaction(listOfTransactions[i].id);
        }
      }
    }
  };
}
