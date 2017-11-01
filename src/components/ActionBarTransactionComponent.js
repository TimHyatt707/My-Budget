import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import CreateTransactionDialogComponent from "./CreateTransactionDialogComponent";
import UpdateTransactionDialogComponent from "./UpdateTransactionDialogComponent";

export default class ActionBarTransactionComponent extends Component {
  render() {
    let categories;
    let disabled = false;
    let disabledCreate = false;
    let disabledUpdate = false;
    if (!this.props.token) {
      disabled = true;
      disabledCreate = true;
    }
    if (this.props.selectedTransactionIds.length === 0) {
      disabled = true;
      disabledUpdate = true;
    }
    if (this.props.selectedTransactionIds.length > 1) {
      disabledUpdate = true;
    }
    if (!this.props.categories) {
      categories = [];
    } else {
      categories = this.props.categories;
    }
    return (
      <div>
        <form onSubmit={this._onSubmitHandler}>
          <TextField
            style={{ marginRight: 20, marginBottom: 20 }}
            id="SearchBar"
            hintText="Search for transaction by name"
            hintStyle={{ color: "grey" }}
            inputStyle={{ color: "black" }}
          />
          <RaisedButton
            type="submit"
            label="GO"
            style={{
              width: "20px",
              marginTop: "10px"
            }}
          />
        </form>
        <div
          style={{
            display: "flex",
            width: 400,
            justifyContent: "space-between"
          }}
        >
          <RaisedButton
            id="CREATE"
            label="CREATE"
            disabled={disabledCreate}
            onClick={this._onCreateTransactionHandler}
          >
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
              categories={categories}
              onSubmitTransaction={this.props.onSubmitTransaction}
              token={this.props.token}
              authenticatedUserId={this.props.authenticatedUserId}
            />
          </RaisedButton>
          <RaisedButton
            id="UPDATE"
            label="UPDATE"
            disabled={disabledUpdate}
            onClick={this._onUpdateTransactionHandler}
          >
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
              categories={categories}
              selectedTransactionIds={this.props.selectedTransactionIds}
              token={this.props.token}
              authenticatedUserId={this.props.authenticatedUserId}
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
      this.props.onDeleteTransaction(
        id,
        this.props.authenticatedUserId,
        this.props.token
      )
    );
  _onSubmitHandler = event => {
    event.preventDefault();
    const $form = event.target;
    let query = $form.SearchBar.value.toLowerCase();
    let pattern = new RegExp(query);
    let listOfTransactions = this.props.transactions;
    if (!listOfTransactions) {
      alert("No transactions to display");
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
