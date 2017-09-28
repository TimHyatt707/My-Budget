import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import TransactionPageLayout from './TransactionPageLayout';
import ActionBarTransactionComponent from './ActionBarTransactionComponent';
import NavbarComponent from './NavbarComponent';
import TransactionTableComponent from './TransactionTableComponent';
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

const pageTitle = 'Transaction Page';
const pages = ['Home Page', 'Budgeting', 'Transactions'];
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
const categories = [
  {
    id: 0,
    category: 'Food',
    limit: '300'
  }
];

let selectedTransactionIds = [1];

storiesOf('TransactionPageLayout', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Happy Path', () =>
    <TransactionPageLayout>
      <NavbarComponent pageTitle={pageTitle} pages={pages} />
      <ActionBarTransactionComponent />
      <TransactionTableComponent
        categories={categories}
        transactions={transactions}
        selectedTransactionIds={selectedTransactionIds}
      />
      <FooterComponent pageTitle={pageTitle} />
    </TransactionPageLayout>
  );
