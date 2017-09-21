import React from 'react';
import { shallow } from 'enzyme';

import CreateTransactionDialogComponent from './../components/CreateTransactionDialogComponent';

const onCloseCreateTransactionDialog = jest.fn();
const shallowWrapper = shallow(
  <CreateTransactionDialogComponent
    onCloseCreateTransactionDialog={onCloseCreateTransactionDialog}
  />
);

describe('CreateTransactionDialogComponent', () => {
  it('Dialog', () => {
    expect(shallowWrapper.find('Dialog')).toHaveLength(1);
  });
  it('form', () => {
    expect(shallowWrapper.find('form')).toHaveLength(1);
  });
  it('FlatButton', () => {
    expect(shallowWrapper.find('FlatButton')).toHaveLength(2);
  });
  it('TextField', () => {
    expect(shallowWrapper.find('TextField')).toHaveLength(2);
  });
  it('onCloseCreateCategoryDialog', () => {
    shallowWrapper.find('#FlatButtonClose').simulate('click');
    expect(onCloseCreateTransactionDialog).toHaveBeenCalled();
  });
});
