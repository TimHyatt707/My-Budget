import React from 'react';
import { shallow } from 'enzyme';

import UpdateCategoryDialogComponent from './../components/UpdateCategoryDialogComponent';

const onCloseUpdateCategoryDialog = jest.fn();

const shallowWrapper = shallow(
  <UpdateCategoryDialogComponent
    onCloseUpdateCategoryDialog={onCloseUpdateCategoryDialog}
  />
);

describe('CreateCategoryDialogComponent', () => {
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
    expect(shallowWrapper.find('TextField')).toHaveLength(3);
  });
  it('onCloseUpdateCategoryDialog', () => {
    shallowWrapper.find('#FlatButtonClose').simulate('click');
    expect(onCloseUpdateCategoryDialog).toHaveBeenCalled();
  });
});
