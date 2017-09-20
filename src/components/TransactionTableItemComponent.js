import React, { Component } from 'react';
import { TableRowColumn, TableRow } from 'material-ui/Table';

export default class TransactionTableItemComponent extends Component {
  render() {
    let color;
    let id = this.props.transaction.id;
    let selected = false;
    if (this.props.selectedTransactionIds) {
      let Ids = this.props.selectedTransactionIds;
      for (let i = 0; i < Ids.length; i++) {
        if (Ids[i] === id) selected = true;
      }
    }
    if (selected) {
      color = '#FFEB3B';
    } else {
      color = '#212121';
    }
    return (
      <TableRow style={{ backgroundColor: color }}>
        <TableRowColumn>
          {this.props.transaction.amountSpent}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.transaction.category}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.transaction.name}
        </TableRowColumn>
        <TableRowColumn>
          {this.props.transaction.timestamp}
        </TableRowColumn>
      </TableRow>
    );
  }
}
