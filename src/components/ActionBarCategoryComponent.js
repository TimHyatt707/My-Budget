import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import CreateCategoryDialogComponent from "./CreateCategoryDialogComponent";
import UpdateCategoryDialogComponent from "./UpdateCategoryDialogComponent";

export default class ActionBarCategoryComponent extends Component {
  constructor(props) {
    super(props);
    this._onUpdateCategoryHandler = this._onUpdateCategoryHandler.bind(this);
    this._onCreateCategoryHandler = this._onCreateCategoryHandler.bind(this);
    this._onDeleteCategoryHandler = this._onDeleteCategoryHandler.bind(this);
    this._onSortCategoryHandler = this._onSortCategoryHandler.bind(this);
  }
  render() {
    let disabled = false;
    let disabledCreate = false;
    let disabledUpdate = false;
    if (!this.props.token) {
      disabledCreate = true;
      disabledUpdate = true;
    }
    if (this.props.selectedCategoryIds.length === 0) {
      disabled = true;
      disabledUpdate = true;
    }
    if (this.props.selectedCategoryIds.length > 1) {
      disabledUpdate = true;
    }

    return (
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
          onClick={this._onCreateCategoryHandler}
        >
          <CreateCategoryDialogComponent
            authenticatedUserId={this.props.userId}
            token={this.props.token}
            onOpenCreateCategoryDialog={this.props.onOpenCreateCategoryDialog}
            onShowCreateCategoryDialog={this.props.onShowCreateCategoryDialog}
            onCloseCreateCategoryDialog={this.props.onCloseCreateCategoryDialog}
            onSubmitCategory={this.props.onSubmitCategory}
          />
        </RaisedButton>
        <RaisedButton
          id="UPDATE"
          label="UPDATE"
          disabled={disabledUpdate}
          onClick={this._onUpdateCategoryHandler}
        >
          <UpdateCategoryDialogComponent
            authenticatedUserId={this.props.userId}
            token={this.props.token}
            onOpenUpdateCategoryDialog={this.props.onOpenUpdateCategoryDialog}
            onCloseUpdateCategoryDialog={this.props.onCloseUpdateCategoryDialog}
            onShowUpdateCategoryDialog={this.props.onShowUpdateCategoryDialog}
            onUpdateCategory={this.props.onUpdateCategory}
            selectedCategoryIds={this.props.selectedCategoryIds}
          />
        </RaisedButton>
        <RaisedButton
          id="DELETE"
          label="DELETE"
          disabled={disabled}
          onClick={this._onDeleteCategoryHandler}
        />
        <RaisedButton
          id="SORT"
          label="SORT"
          disabled={disabledCreate}
          onClick={this._onSortCategoryHandler}
        />
      </div>
    );
  }
  _onCreateCategoryHandler() {
    this.props.onOpenCreateCategoryDialog();
  }
  _onUpdateCategoryHandler() {
    this.props.onOpenUpdateCategoryDialog();
  }
  _onSortCategoryHandler() {
    this.props.onSortCategoryName();
  }
  _onDeleteCategoryHandler() {
    this.props.selectedCategoryIds.forEach(id =>
      this.props.onDeleteCategory(id, this.props.token)
    );
  }
}
