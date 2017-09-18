import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import TransactionPreviewComponent from './TransactionPreviewComponent';

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
    timestamp: '06/26/1997'
  },
  {
    id: 2,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  }
];

const mockTransactions11 = [
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
    timestamp: '06/26/1997'
  },
  {
    id: 2,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  },
  {
    id: 3,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  },
  {
    id: 4,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  },
  {
    id: 5,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  },
  {
    id: 6,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  },
  {
    id: 7,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  },
  {
    id: 8,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  },
  {
    id: 9,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  },
  {
    id: 10,
    name: 'Electricity',
    category: 'Bills',
    amount: '$102.00',
    timestamp: '06/26/1997'
  },
  {
    id: 11,
    name: 'This should not be displayed',
    category: '$$$$',
    amount: '$$$$$$',
    timestamp: '$$$$$$'
  }
];

storiesOf('TransactionPreviewComponent', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Without Transaction Log', () => <TransactionPreviewComponent />)
  .add('With Transaction Log', () =>
    <TransactionPreviewComponent transactions={mockTransactions} />
  )
  .add('With edge case transactions', () =>
    <TransactionPreviewComponent transactions={mockTransactions11} />
  );
