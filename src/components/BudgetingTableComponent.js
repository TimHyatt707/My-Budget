import React, { Component } from 'react';
import BudgetDisplayComponent from './BudgetDisplayComponent';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableBody
} from 'material-ui/Table';
import BudgetingTableItemComponent from './BudgetingTableItemComponent';
var _ = require('lodash');

export default class BudgetingTableComponent extends Component {
  constructor(props) {
    super(props);
    this._sendBudgetDisplayData = this._sendBudgetDisplayData.bind(this);
  }
  _sendBudgetDisplayData(categories) {
    this.props.sendBudgetDisplayData(categories);
  }
  render() {
    let listOfCategories;
    let listOfTransactions;
    let categoryAmountSpent;
    let sorted = this.props.currentSort;
    if (!this.props.transactions) {
      listOfTransactions = [];
    } else {
      listOfTransactions = this.props.transactions;
    }
    if (!this.props.categories) {
      listOfCategories = [
        {
          category: 'There are no categories to display',
          amountSpent: '',
          limit: ''
        }
      ];
    } else {
      listOfCategories = this.props.categories;
    }
    if (sorted) {
      listOfCategories.sort((a, b) => {
        if (a.category < b.category) {
          return -1;
        }
        if (a.category > b.category) {
          return 1;
        }
        return 0;
      });
    }
    categoryAmountSpent = listOfTransactions.map(transaction => {
      return {
        category: transaction.category,
        amountSpent: transaction.amountSpent
      };
    });
    if (categoryAmountSpent.length === 0) {
    } else {
      categoryAmountSpent = _.groupBy(categoryAmountSpent, 'category');
      for (let item in categoryAmountSpent) {
        categoryAmountSpent[item] = categoryAmountSpent[item].reduce((a, b) => {
          a.amountSpent += b.amountSpent;
          return a;
        });
      }
      listOfCategories.forEach(category => {
        for (let item in categoryAmountSpent) {
          if (category.category === categoryAmountSpent[item].category) {
            category.amountSpent = categoryAmountSpent[item].amountSpent;
          }
        }
      });
    }
    return (
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <BudgetDisplayComponent budgetDisplayData={listOfCategories} />
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Category</TableHeaderColumn>
              <TableHeaderColumn>Amount Spent</TableHeaderColumn>
              <TableHeaderColumn>Limit</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listOfCategories.map((category, index) =>
              <BudgetingTableItemComponent
                key={index}
                category={category}
                selectedCategoryIds={this.props.selectedCategoryIds}
                onSelectCategory={this.props.onSelectCategory}
                onDeselectCategory={this.props.onDeselectCategory}
              />
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}
