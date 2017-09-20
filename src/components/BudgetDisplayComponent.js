import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { red500, green800 } from 'material-ui/styles/colors';

export default class BudgetDisplayComponent extends Component {
  render() {
    const { totalSpent, totalLimit } = this.props;
    return (
      <div>
        <div>
          <FontIcon className="material-icons" color={red500}>
            trending_down
          </FontIcon>
          ${totalSpent} spent
        </div>
        <div>
          <FontIcon className="material-icons" color={green800}>
            account balance
          </FontIcon>
          ${totalLimit} Limit
        </div>
      </div>
    );
  }
}
