import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PieChartComponent from './PieChartComponent';

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
//
const categories = [
  {
    id: 0,
    category: 'Food',
    amountSpent: 100,
    limit: 200
  },
  {
    id: 1,
    category: 'Entertainment',
    amountSpent: 200,
    limit: 300
  }
];

storiesOf('PieChartComponent', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Pie chart renders without data', () => <PieChartComponent />)
  .add('Pie chart renders with data', () =>
    <PieChartComponent categories={categories} width={1000} />
  );
