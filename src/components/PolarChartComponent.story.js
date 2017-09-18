import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import PolarChartComponent from './PolarChartComponent';

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
const data = [
  { x: 0, y: 2 },
  { x: 45, y: 3 },
  { x: 90, y: 5 },
  { x: 135, y: 4 },
  { x: 180, y: 4 },
  { x: 225, y: 4 },
  { x: 270, y: 4 },
  { x: 315, y: 4 }
];
const labels = [
  'Food',
  'Transportation',
  'Bills',
  'Entertainment',
  'Personal Care',
  'Shopping',
  'Taxes',
  'Unforeseen'
];
const tickValues = [0, 45, 90, 135, 180, 225, 270, 315];
storiesOf('PolarChartComponent', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Polar chart renders without data', () => <PolarChartComponent />)
  .add('Polar chart renders with data', () =>
    <PolarChartComponent data={data} tickValues={tickValues} labels={labels} />
  );
