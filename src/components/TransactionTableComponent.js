import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow
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
          <TableRow>
            <TableHeaderColumn>Amount Spent</TableHeaderColumn>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn>Name of Transaction</TableHeaderColumn>
            <TableHeaderColumn>Timestamp</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listOfTransactions.map(transaction =>
            <TransactionTableItemComponent
              key={transaction.id}
              transaction={transaction}
              selectedTransactionIds={this.props.selectedTransactionIds}
              onSelectTransaction={this.props.onSelectTransaction}
              onDeselectTransaction={this.props.onDeselectTransaction}
            />
          )}
        </TableBody>
      </Table>
    );
  }
}
