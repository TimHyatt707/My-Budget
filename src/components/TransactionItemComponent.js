import React, { Component } from 'react';
import { TableRowColumn, TableRow } from 'material-ui/Table';
// import account_balance from '../../public/icons/ic_account_balance.svg';

export default class TransactionItemComponent extends Component {
  render() {
    return (
      <TableRow selectable={false}>
        <TableRowColumn>
          {this.props.transaction.amountSpent}
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
