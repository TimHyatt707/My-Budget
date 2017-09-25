import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { red500, green800 } from 'material-ui/styles/colors';
var numeral = require('numeral');

export default class BudgetDisplayComponent extends Component {
  render() {
    let totalSpent = 0;
    let totalLimit = 0;
    if (this.props.budgetDisplayData) {
      this.props.budgetDisplayData.forEach(category => {
        console.log(category.amountSpent);
        totalSpent += category.amountSpent || 0;
        totalLimit += category.limit;
      });
    }
    return (
      <div>
        <div>
          <FontIcon
            className="material-icons"
            color={red500}
            style={{ marginRight: 15 }}>
            Spent
          </FontIcon>
          {numeral(totalSpent).format('$0,0.00')}
        </div>
        <div>
          <FontIcon
            className="material-icons"
            color={green800}
            style={{ marginRight: 15 }}>
            Limit
          </FontIcon>
          {numeral(totalLimit).format('$0,0.00')}
        </div>
      </div>
    );
  }
}
