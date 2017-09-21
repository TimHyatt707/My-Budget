import React from 'react';
import { shallow } from 'enzyme';

import CreateCategoryDialogComponent from './../components/CreateCategoryDialogComponent';

const onCloseCreateCategoryDialog = jest.fn();

const shallowWrapper = shallow(
  <CreateCategoryDialogComponent
    onCloseCreateCategoryDialog={onCloseCreateCategoryDialog}
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
  it('onCloseCreateCategoryDialog', () => {
    shallowWrapper.find('#FlatButtonClose').simulate('click');
    expect(onCloseCreateCategoryDialog).toHaveBeenCalled();
  });
});
