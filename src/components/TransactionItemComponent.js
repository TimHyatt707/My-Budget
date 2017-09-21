import React, { Component } from 'react';
import { TableRowColumn, TableRow } from 'material-ui/Table';
var numeral = require('numeral');
// import account_balance from '../../public/icons/ic_account_balance.svg';

export default class TransactionItemComponent extends Component {
  render() {
    return (
      <TableRow selectable={false}>
        <TableRowColumn>
          {numeral(this.props.transaction.amountSpent).format('$0,0.00')}
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
