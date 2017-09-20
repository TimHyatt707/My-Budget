import React, { Component } from 'react';
import { TableRowColumn, TableRow } from 'material-ui/Table';

export default class TransactionTableItemComponent extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }
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
      color = '#F50057';
    } else {
      color = '#212121';
    }
    return (
      <TableRow style={{ backgroundColor: color }} onClick={this._handleClick}>
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
