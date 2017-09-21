import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import NavbarComponent from './NavbarComponent';

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

storiesOf('NavbarComponent', module)
  .addDecorator(muiTheme([newTheme]))
  .add('With static Title', () =>
    <NavbarComponent pageTitle={pageTitle} pages={pages} />
  )
  .add('If pageTitle is a falsey value', () =>
    <NavbarComponent pageTitle={null} pages={pages} onShowSearch={false} />
  );
