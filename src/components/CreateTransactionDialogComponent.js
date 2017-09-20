import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class CreateTransactionDialogComponent extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleOpen = this._handleOpen.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }
  state = {
    value: 'Select a Category'
  };
  render() {
    let listOfCategories = this.props.categories;
    const actions = [
      <FlatButton
        key="1"
        label="Cancel"
        primary={true}
        onClick={this._handleClose}
      />,
      <FlatButton key="2" label="Submit" primary={true} type="submit" />
    ];
    return (
      <Dialog
        title="Add a transaction"
        modal={true}
        open={this.props.onShowCreateTransactionDialog}>
        <form onSubmit={this._handleSubmit}>
          <TextField id="amountSpent" hintText="Amount Spent" />
          <br />
          <SelectField
            id="category"
            floatingLabelText="Category"
            value={this.state.value}
            onChange={this._handleChange}>
            {listOfCategories.map(category => {
              return (
                <MenuItem
                  key={category.id}
                  value={category.category}
                  primaryText={category.category}
                />
              );
            })}
          </SelectField>
          <br />
          <TextField id="name" hintText="Name of Transaction" />
          <br />
          <DatePicker id="timestamp" hintText="Date" />
          <br />
          {actions}
        </form>
      </Dialog>
    );
  }
  _handleClose() {
    this.props.onCloseCreateTransactionDialog();
  }
  _handleOpen() {
    this.props.onOpenCreateTransactionDialog();
  }
  _handleSubmit(event) {
    event.preventDefault();
    let object = {};
    const $form = event.target;
    object.category = this.state.value;
    if (
      typeof parseInt($form.amountSpent.value, 10) !== 'number' ||
      $form.amountSpent.value <= 0
    ) {
      alert('Invalid Input');
    } else if (!$form.timestamp.value) {
      alert('Please fill out all forms');
    } else if (this.state.value === 'Select a Category') {
      alert('Please select a category');
    } else {
      object.amountSpent = parseFloat($form.amountSpent.value);
      object.name = $form.name.value;
      object.timestamp = $form.timestamp.value;
      this.props.onCloseCreateTransactionDialog();
      this.props.onSubmitTransaction(object);
    }
  }
  _handleChange(event, index, value) {
    this.setState({ value });
  }
}
