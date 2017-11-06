import React, { Component } from "react";
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow
} from "material-ui/Table";
import TransactionTableItemComponent from "./TransactionTableItemComponent";

export default class TransactionTableComponent extends Component {
  render() {
    let listOfTransactions;
    if (!this.props.transactions.length) {
      listOfTransactions = [
        {
          amountSpent: "No transactions",
          category: "",
          name: "",
          timestamp: ""
        }
      ];
    } else {
      listOfTransactions = this.props.transactions;
      listOfTransactions.sort((a, b) => {
        return a.amountSpent - b.amountSpent;
      });
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
          {listOfTransactions.map((transaction, index) => (
            <TransactionTableItemComponent
              key={index}
              transaction={transaction}
              selectedTransactionIds={this.props.selectedTransactionIds}
              onSelectTransaction={this.props.onSelectTransaction}
              onDeselectTransaction={this.props.onDeselectTransaction}
            />
          ))}
        </TableBody>
      </Table>
    );
  }
}
