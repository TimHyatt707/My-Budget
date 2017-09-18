import React, { Component } from 'react';
import { TableRowColumn, TableRow } from 'material-ui/Table';

export default class BudgetingTableItemComponent extends Component {
  render() {
    const { category, selectedCategoryIds } = this.props;
    let color;
    let Ids;
    let id = this.props.category.id;
    let selected = false;
    if (selectedCategoryIds) {
      let Ids = this.props.selectedCategoryIds;
      for (let i = 0; i < Ids.length; i++) {
        if (Ids[i] === id) selected = true;
      }
    }
    if (selected) {
      color = '#FFEB3B';
    } else {
      color = '#FAFAFA';
    }
    return (
      <TableRow style={{ backgroundColor: color }}>
        <TableRowColumn>
          {this.props.category.category}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.category.amountSpent}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.category.limit}
        </TableRowColumn>
      </TableRow>
    );
  }
}
