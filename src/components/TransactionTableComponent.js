import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody
} from 'material-ui/Table';
import TransactionTableItemComponent from './TransactionTableItemComponent';

export default class TransactionTableComponent extends Component {
  render() {
    let listOfTransactions;
    if (!this.props.transactions) {
      listOfTransactions = [
        {
          amountSpent: 'There are no transactions to display',
          category: '',
          name: '',
          timestamp: ''
        }
      ];
    } else {
      listOfTransactions = this.props.transactions;
    }
    return (
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableHeaderColumn>Amount Spent</TableHeaderColumn>
          <TableHeaderColumn>Category</TableHeaderColumn>
          <TableHeaderColumn>Name of Transaction</TableHeaderColumn>
          <TableHeaderColumn>Timestamp</TableHeaderColumn>
        </TableHeader>
        <TableBody>
          {listOfTransactions.map(transaction =>
            <TransactionTableItemComponent
              transaction={transaction}
              selectedTransactionIds={this.props.selectedTransactionIds}
            />
          )}
        </TableBody>
      </Table>
    );
  }
}
