import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import TransactionItemComponent from './TransactionItemComponent';

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

const mockTransaction = {
  name: 'Coffee',
  category: 'Food',
  amount: '$2.50',
  timestamp: '06/26/1997'
};

storiesOf('TransactionItemComponent', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Happy path', () =>
    <TransactionItemComponent transaction={mockTransaction} />
  );
