import React, { Component } from 'react';
import { TableRowColumn, TableRow } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
var numeral = require('numeral');

export default class TransactionTableItemComponent extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
  render() {
    let color;
    let transaction;
    let id = this.props.transaction.id;
    let selected = false;
    if (this.props.selectedTransactionIds) {
      let Ids = this.props.selectedTransactionIds;
      for (let i = 0; i < Ids.length; i++) {
        if (Ids[i] === id) selected = true;
      }
    }
    if (selected) {
      color = '#F50057';
    } else {
      color = '#212121';
    }
    if (!this.props.transaction) {
      transaction = null;
      return <CircularProgress />;
    } else {
      transaction = this.props.transaction;
      return (
        <TableRow
          style={{ backgroundColor: color }}
          onClick={this._handleClick}>
          <TableRowColumn>
            {numeral(transaction.amountSpent).format('$0,0.00')}
          </TableRowColumn>
          <TableRowColumn>
            {transaction.category}
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
  _handleClick() {
    let id = this.props.transaction.id;
    let selected = false;
    if (this.props.selectedTransactionIds) {
      let Ids = this.props.selectedTransactionIds;
      for (let i = 0; i < Ids.length; i++) {
        if (Ids[i] === id) selected = true;
      }
    }
    if (selected) {
      this.props.onDeselectTransaction(id);
    } else {
      this.props.onSelectTransaction(id);
    }
  }
}
