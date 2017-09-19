import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import CreateCategoryDialogComponent from './CreateCategoryDialogComponent';

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

let dontShow = null;
let show = true;

storiesOf('CreateCategoryDialog', module)
  .addDecorator(muiTheme([newTheme]))
  .add('Dont show', () =>
    <CreateCategoryDialogComponent showCreateCategoryDialog={dontShow} />
  )
  .add('Show', () =>
    <CreateCategoryDialogComponent onShowCreateCategoryDialog={show} />
  );
