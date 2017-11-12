import React, { Component } from "react";
import { TableRowColumn, TableRow } from "material-ui/Table";
import CircularProgress from "material-ui/CircularProgress";
var numeral = require("numeral");

export default class BudgetingTableItemComponent extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  render() {
    let color;
    let id = this.props.category.id;
    let category;
    let selected = false;
    if (this.props.selectedCategoryIds) {
      let Ids = this.props.selectedCategoryIds;
      for (let i = 0; i < Ids.length; i++) {
        if (Ids[i] === id) selected = true;
      }
    }
    //If table item is selected, color changes
    if (selected) {
      color = "#F50057";
    } else {
      color = "#212121";
    }
    if (!this.props.category) {
      category = null;
      return <CircularProgress />;
    } else {
      category = this.props.category;
      return (
        <TableRow
          style={{ backgroundColor: color }}
          onClick={this._handleClick}
        >
          <TableRowColumn>{category.category}</TableRowColumn>
          <TableRowColumn>
            {numeral(category.amountSpent).format("$0,0.00") || "$0.00"}
          </TableRowColumn>
          <TableRowColumn>
            {numeral(category.limit).format("$0,0.00")}
          </TableRowColumn>
        </TableRow>
      );
    }
  }
  //Handles selecting a category ID
  _handleClick() {
    let id = this.props.category.id;
    let selected = false;
    if (this.props.selectedCategoryIds) {
      let Ids = this.props.selectedCategoryIds;
      for (let i = 0; i < Ids.length; i++) {
        if (Ids[i] === id) selected = true;
      }
    }
    if (selected) {
      this.props.onDeselectCategory(id);
    } else {
      this.props.onSelectCategory(id);
    }
  }
}
