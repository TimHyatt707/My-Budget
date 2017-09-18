import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TransactionItemComponent from './TransactionItemComponent';
import RaisedButton from 'material-ui/RaisedButton';

export default class TransactionPreviewComponent extends Component {
  render() {
    const { transactions } = this.props;
    const style = {
      height: 300,
      width: 300,
      marginTop: 40,
      marginBottom: 20,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: '#FAFAFA'
    };
    const title = 'Recent Transactions';
    let listOfTransactions = [];
    if (!this.props.transactions) {
      listOfTransactions[0] = {
        id: 0,
        name: 'There are no transactions to display',
        category: '',
        timestamp: '',
        amount: ''
      };
    } else {
      listOfTransactions = this.props.transactions;
      if (listOfTransactions.length > 5) {
        listOfTransactions.splice(5);
      }
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Paper zDepth={4} style={style} className="TransactionsPreview">
          <div
            style={{
              backgroundColor: '#B2EBF2'
            }}>
            {title}
          </div>
          <List>
            {listOfTransactions.map(transaction =>
              <TransactionItemComponent
                key={transaction.id}
                transaction={transaction}>
                <Divider />
              </TransactionItemComponent>
            )}
          </List>
        </Paper>
        <RaisedButton
          label="TRANSACTIONS"
          backgroundColor="#B2EBF2"
          style={{
            height: 34,
            width: 150
          }}
        />
      </div>
    );
  }
}
