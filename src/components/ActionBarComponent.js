import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class ActionBarComponent extends Component {
  render() {
    const { onCreateCategory, onUpdateCategory, onDeleteCategory } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          width: 400,
          justifyContent: 'space-between'
        }}>
        <RaisedButton label="CREATE" onClick={this._onCreateCategoryHandler} />
        <RaisedButton label="UPDATE" onClick={this._onUpdateCategoryHandler} />
        <RaisedButton label="DELETE" onClick={this._onDeleteCategoryHandler} />
      </div>
    );
  }
  _onCreateCategoryHandler = () => console.log('_onCreate');
  _onUpdateCategoryHandler = () => console.log('_onUpdate');
  _onDeleteCategoryHandler = () => console.log('_onDelete');
}
