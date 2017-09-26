import React, { Component } from 'react';
import { TableRowColumn, TableRow } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
var numeral = require('numeral');

export default class TransactionItemComponent extends Component {
  render() {
    let transaction;
    if (!this.props.transaction) {
      transaction = null;
      return <CircularProgress />;
    } else {
      transaction = this.props.transaction;
      return (
        <TableRow selectable={false}>
          <TableRowColumn>
            {numeral(transaction.amountSpent).format('$0,0.00')}
          </TableRowColumn>
          <TableRowColumn>
            {transaction.name}
          </TableRowColumn>
          <TableRowColumn>
            {transaction.timestamp}
          </TableRowColumn>
        </TableRow>
      );
    }
  }
}
