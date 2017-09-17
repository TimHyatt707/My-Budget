import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import BudgetPreviewComponent from './BudgetPreviewComponent';

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

const PieChart = null;

storiesOf('BudgetPreviewComponent', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Without Pie Chart', () =>
    <BudgetPreviewComponent PieChart={PieChart} />
  );
