import React, { Component } from 'react';
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableBody
} from 'material-ui/Table';
import BudgetingTableItemComponent from './BudgetingTableItemComponent';

export default class BudgetingTableComponent extends Component {
  render() {
    let listOfCategories;
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
    return (
      <Table>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Category</TableHeaderColumn>
            <TableHeaderColumn>Amount Spent</TableHeaderColumn>
            <TableHeaderColumn>Limit</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listOfCategories.map(category =>
            <BudgetingTableItemComponent
              key={category.id}
              category={category}
              selectedCategoryIds={this.props.selectedCategoryIds}
              onSelectCategory={this.props.onSelectCategory}
              onDeselectCategory={this.props.onDeselectCategory}
            />
          )}
        </TableBody>
      </Table>
    );
  }
}
