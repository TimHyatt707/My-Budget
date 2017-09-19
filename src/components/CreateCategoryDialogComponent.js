import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class CreateCategoryDialogComponent extends Component {
  render() {
    const {
      onOpenCreateCategoryDialog,
      onShowCreateCategoryDialog,
      onCloseCreateCategoryDialog,
      onSubmitCategory
    } = this.props;
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this._handleClose} />,
      <FlatButton label="Submit" primary={true} type="submit" />
    ];
    return (
      <Dialog
        title="Create a Category"
        modal={true}
        open={this.props.onShowCreateCategoryDialog}>
        <form onSubmit={this._handleSubmit}>
          <TextField id="category" hintText="Category" />
          <br />
          <TextField id="amountSpent" hintText="Amount Spent" />
          <br />
          <TextField id="limit" hintText="Limit" />
          <br />
          {actions}
        </form>
      </Dialog>
    );
  }
  _handleClose() {
    this.props.onCloseCreateCategoryDialog();
  }
  _handleOpen() {
    this.props.onOpenCreateCategoryDialog();
  }
  _handleSubmit(event) {
    event.preventDefault();
    let object = {};
    const $form = event.target;
    object.category = $form.category.value;
    if (
      typeof parseInt($form.amountSpent.value) !== 'number' ||
      typeof parseInt($form.limit.value) !== 'number'
    ) {
      alert('Invalid Input');
    } else {
      object.amountSpent = $form.amountSpent.value;
      object.limit = $form.limit.value;
      this.props.onSubmitCategory(object);
    }

    // onSubmitCreateCategoryDialog();
  }
}
