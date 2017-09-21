import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class UpdateCategoryDialogComponent extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleOpen = this._handleOpen.bind(this);
  }
  render() {
    const actions = [
      <FlatButton
        key="1"
        id="FlatButtonClose"
        label="Cancel"
        primary={true}
        onClick={this._handleClose}
      />,
      <FlatButton key="2" label="Submit" primary={true} type="submit" />
    ];
    return (
      <Dialog
        title="Update many categories at once or update a single category"
        modal={true}
        open={this.props.onShowUpdateCategoryDialog}>
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
    this.props.onCloseUpdateCategoryDialog();
  }
  _handleOpen() {
    this.props.onOpenUpdateCategoryDialog();
  }
  _handleSubmit(event) {
    event.preventDefault();
    let object = {};
    const $form = event.target;
    object.category = $form.category.value;
    if (
      typeof parseInt($form.amountSpent.value, 10) !== 'number' ||
      typeof parseInt($form.limit.value, 10) !== 'number'
    ) {
      alert('Invalid Input');
    } else if (!$form.category.value) {
      alert('Please fill out all fields');
    } else if ($form.amountSpent.value <= 0 || $form.limit.value <= 0) {
      alert('Invalid Input');
    } else {
      object.amountSpent = parseFloat($form.amountSpent.value);
      object.limit = parseFloat($form.limit.value);
      for (let i = 0; i < this.props.selectedCategoryIds.length; i++) {
        this.props.onUpdateCategory(this.props.selectedCategoryIds[i], object);
      }
    }
    this.props.onCloseUpdateCategoryDialog();
  }
}