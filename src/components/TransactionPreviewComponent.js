import React, { Component } from "react";
import Paper from "material-ui/Paper";
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableBody
} from "material-ui/Table";
import TransactionItemComponent from "./TransactionItemComponent";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

export default class TransactionPreviewComponent extends Component {
  render() {
    const style = {
      height: 500,
      width: 500,
      marginTop: 40,
      marginRight: 20,
      marginBottom: 20,
      textAlign: "center",
      display: "inline-block"
    };
    const title = "Recent Transactions";
    let listOfTransactions = [];
    if (!this.props.transactions.length) {
      listOfTransactions[0] = {
        id: 0,
        name: "No Transactions",
        category: "",
        timestamp: "",
        amount: ""
      };
    } else {
      listOfTransactions = this.props.transactions;
      if (listOfTransactions.length > 6) {
        listOfTransactions.splice(6);
      }
      listOfTransactions.sort((a, b) => {
        return a.amountSpent - b.amountSpent;
      });
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Paper zDepth={4} style={style} className="TransactionsPreview">
          <div>{title}</div>
          <Table>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Amount</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Timestamp</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {listOfTransactions.map(transaction => (
                <TransactionItemComponent
                  style={{
                    fontSize: 14,
                    overflow: "hidden"
                  }}
                  adjust
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>
        <Link to={"/Transactions"}>
          <RaisedButton
            label="TRANSACTIONS"
            style={{
              height: 34,
              width: 150
            }}
          />
        </Link>
      </div>
    );
  }
}
