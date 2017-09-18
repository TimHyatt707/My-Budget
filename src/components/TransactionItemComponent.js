import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
// import account_balance from '../../public/icons/ic_account_balance.svg';

export default class TransactionItemComponent extends Component {
  render() {
    const { transaction } = this.props;
    return (
      <ListItem
        style={{
          backgroundColor: '#FAFAFA',
          fontSize: 14,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }}
        primaryText={
          this.props.transaction.category +
          ' ' +
          this.props.transaction.name +
          ' ' +
          this.props.transaction.amount +
          ' ' +
          this.props.transaction.timestamp
        }
      />
    );
  }
}
