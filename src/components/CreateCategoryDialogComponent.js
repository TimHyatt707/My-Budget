import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

export default class CreateCategoryDialogComponent extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleOpen = this._handleOpen.bind(this);
  }
  render() {
    const actions = [
      <FlatButton
        id="FlatButtonClose"
        key="1"
        label="Cancel"
        primary={true}
        onClick={this._handleClose}
      />,
      <FlatButton
        id="onSubmit"
        key="2"
        label="Submit"
        primary={true}
        type="submit"
      />
    ];
    return (
      <Dialog
        title="Create a Category"
        modal={true}
        open={this.props.onShowCreateCategoryDialog}
      >
        <form onSubmit={this._handleSubmit}>
          <TextField id="category" hintText="Category" />
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
    object.name = $form.category.value;
    if (typeof parseInt($form.limit.value, 10) !== "number") {
      alert("Invalid Input");
    } else if (!$form.category.value) {
      alert("Please fill out all fields");
    } else if ($form.limit.value <= 0) {
      alert("Invalid Input");
    } else {
      object.limit = parseFloat($form.limit.value);
      this.props.onCloseCreateCategoryDialog();
      this.props.onSubmitCategory(this.props.userId, object, this.props.token);
    }
  }
}
