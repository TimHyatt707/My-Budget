import React from 'react';
import { shallow } from 'enzyme';

import UpdateTransactionDialogComponent from './../components/UpdateTransactionDialogComponent';

const onCloseUpdateTransactionDialog = jest.fn();
const shallowWrapper = shallow(
  <UpdateTransactionDialogComponent
    onCloseUpateTransactionDialog={onCloseUpdateTransactionDialog}
  />
);

describe('UpdateTransactionDialogComponent', () => {
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
  // it('onCloseUpdateTransactionDialog', () => {
  //   shallowWrapper.find('#FlatButtonClose').simulate('click');
  //   expect(onCloseUpdateTransactionDialog).toHaveBeenCalled();
  // });
});
