import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import IndexPageLayout from './IndexPageLayout';
import NavbarComponent from './NavbarComponent';
import TransactionPreviewComponent from './TransactionPreviewComponent';
import FooterComponent from './FooterComponent';

//data
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
const pageTitle = 'Home Page';
const pages = ['Home Page', 'Budgeting', 'Transactions'];
const data = [{ x: 'Food', y: 35 }, { x: 'Bills', y: 40 }, { x: 'Gas', y: 55 }];
const mockTransactions = [
  {
    id: 0,
    name: 'Coffee',
    category: 'Food',
    amount: '$2.50',
    timestamp: '06/26/1997'
  },
  {
    id: 1,
    name: 'Gas',
    category: 'Transportation',
    amount: '$20.00',
    timestamp: '06/26/1997$$$$$$$$$$'
  },
  {
    id: 2,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  }
];

storiesOf('IndexPageLayout', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Happy Path', () =>
    <IndexPageLayout>
      <NavbarComponent pageTitle={pageTitle} pages={pages} />
      <TransactionPreviewComponent transactions={mockTransactions} />
      <FooterComponent pageTitle={pageTitle} />
    </IndexPageLayout>
  );
