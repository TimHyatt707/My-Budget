import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import TransactionTableComponent from './TransactionTableComponent';

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

let selectedTransactionIds = [1];

storiesOf('TransactionTableComponent', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Happy path', () =>
    <TransactionTableComponent
      transactions={transactions}
      selectedTransactionIds={selectedTransactionIds}
    />
  );
