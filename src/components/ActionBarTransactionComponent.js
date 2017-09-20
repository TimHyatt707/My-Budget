import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class ActionBarTransactionComponent extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          width: 400,
          justifyContent: 'space-between'
        }}>
        <RaisedButton
          label="CREATE"
          onClick={this._onCreateTransactionHandler}
        />
        <RaisedButton
          label="UPDATE"
          onClick={this._onUpdateTransactionHandler}
        />
        <RaisedButton
          label="DELETE"
          onClick={this._onDeleteTransactionHandler}
        />
      </div>
    );
  }
  _onCreateTransactionHandler = () => console.log('_onCreate');
  _onUpdateTransactionHandler = () => console.log('_onUpdate');
  _onDeleteTransactionHandler = () => console.log('_onDelete');
}
