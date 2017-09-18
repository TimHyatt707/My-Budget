import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import BudgetPageLayout from './BudgetPageLayout';
import NavbarComponent from './NavbarComponent';
import PieChartComponent from './PieChartComponent';
import BudgetDisplayComponent from './BudgetDisplayComponent';
import ActionBarComponent from './ActionBarComponent';
import BudgetingTableComponent from './BudgetingTableComponent';
import FooterComponent from './FooterComponent';

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
const data = [{ x: 'Food', y: 35 }, { x: 'Bills', y: 40 }, { x: 'Gas', y: 55 }];
const totalSpent = 200;
const totalLimit = 1000;
const categories = [
  { id: 0, category: 'Food', amountSpent: '$80', limit: '$200' },
  { id: 1, category: 'Gas', amountSpent: '$100', limit: '$200' },
  { id: 2, category: 'Personal Care', amountSpent: '$10', limit: '$40' }
];

storiesOf('BudgetPage', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Happy Path', () =>
    <BudgetPageLayout>
      <NavbarComponent pageTitle={pageTitle} pages={pages} />
      <PieChartComponent data={data} />
      <BudgetDisplayComponent totalSpent={totalSpent} totalLimit={totalLimit} />
      <ActionBarComponent />
      <BudgetingTableComponent categories={categories} />
    </BudgetPageLayout>
  );
