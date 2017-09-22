import React, { Component } from 'react';
import { TableRowColumn, TableRow } from 'material-ui/Table';
var numeral = require('numeral');

export default class BudgetingTableItemComponent extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  render() {
    let color;
    let id = this.props.category.id;
    let selected = false;
    if (this.props.selectedCategoryIds) {
      let Ids = this.props.selectedCategoryIds;
      for (let i = 0; i < Ids.length; i++) {
        if (Ids[i] === id) selected = true;
      }
    }
    if (selected) {
      color = '#F50057';
    } else {
      color = '#212121';
    }
    return (
      <TableRow style={{ backgroundColor: color }} onClick={this._handleClick}>
        <TableRowColumn>
          {this.props.category.category}
        </TableRowColumn>
        <TableRowColumn>
          {numeral(this.props.category.amountSpent).format('$0,0.00')}
        </TableRowColumn>
        <TableRowColumn>
          {numeral(this.props.category.limit).format('$0,0.00')}
        </TableRowColumn>
      </TableRow>
    );
  }
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
