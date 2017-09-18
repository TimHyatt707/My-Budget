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
    const { categories, selectedCategoryIds } = this.props;
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
          <TableHeaderColumn>Category</TableHeaderColumn>
          <TableHeaderColumn>Amount Spent</TableHeaderColumn>
          <TableHeaderColumn>Limit</TableHeaderColumn>
        </TableHeader>
        <TableBody>
          {listOfCategories.map(category =>
            <BudgetingTableItemComponent
              category={category}
              selectedCategoryIds={selectedCategoryIds}
            />
          )}
        </TableBody>
      </Table>
    );
  }
}
