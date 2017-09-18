import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import BudgetDisplayComponent from './BudgetDisplayComponent';

const newTheme = {
  themeName: 'Dark Theme',
  palette: {
    primary1Color: '#424242',
    primary2Color: '#00E5FF',
    alternateTextColor: '#4a4a4a',
    canvasColor: '#616161',
    textColor: '#424242',
    secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
    disabledColor: '#757575',
    accent1Color: '#607d8b',
    backgroundColor: 'red'
  }
};

const totalSpent = 200;
const totalLimit = 1000;

storiesOf('BudgetDisplayComponent', module)
  .addDecorator(muiTheme([newTheme]))
  .add('without data', () => <BudgetDisplayComponent />)
  .add('with data', () =>
    <BudgetDisplayComponent totalSpent={totalSpent} totalLimit={totalLimit} />
  );
