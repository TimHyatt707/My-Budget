import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import BudgetPageLayout from './BudgetPageLayout';
import NavbarComponent from './NavbarComponent';
import PieChartComponent from './PieChartComponent';
import BudgetDisplayComponent from './BudgetDisplayComponent';
import BudgetingTableComponent from './BudgetingTableComponent';

const newTheme = {
  themeName: 'Dark Theme',
  palette: {
    primary1Color: '#424242',
    alternateTextColor: '#4a4a4a',
    canvasColor: '#616161',
    textColor: '#424242',
    secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
    disabledColor: '#757575',
    accent1Color: '#607d8b'
  }
};

const pageTitle = 'Budget Page';
const pages = ['Home Page', 'Budgeting', 'Transactions'];

const categories = [
  { id: 0, category: 'Food', limit: '$200' },
  { id: 1, category: 'Gas', limit: '$200' },
  { id: 2, category: 'Personal Care', limit: '$40' }
];
const transactions = [
  {
    id: 0,
    amountSpent: '$100',
    category: 'Food',
    name: 'groceries',
    timestamp: '06/26/1997'
  },
  {
    id: 1,
    amountSpent: '$12',
    category: 'Entertainment',
    name: 'Movie',
    timestamp: '07/06/1997'
  }
];

storiesOf('BudgetPage', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Happy Path', () =>
    <BudgetPageLayout>
      <NavbarComponent pageTitle={pageTitle} pages={pages} />
      <PieChartComponent categories={categories} width={1000} />
      <BudgetingTableComponent
        categories={categories}
        transactions={transactions}
      />
    </BudgetPageLayout>
  );
