import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
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

const categories = [
  { id: 0, category: 'Food', amountSpent: '$80', limit: '$200' },
  { id: 1, category: 'Gas', amountSpent: '$100', limit: '$200' },
  { id: 2, category: 'Personal Care', amountSpent: '$10', limit: '$40' }
];

let selectedCategoryIds = [0, 2];

storiesOf('BudgetingTableComponent', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Without data', () => <BudgetingTableComponent />)
  .add('With data', () => <BudgetingTableComponent categories={categories} />)
  .add('With data and selected items', () =>
    <BudgetingTableComponent
      categories={categories}
      selectedCategoryIds={selectedCategoryIds}
    />
  );
