import React from 'react';
import { shallow } from 'enzyme';

import ActionBarCategoryComponent from './../components/ActionBarCategoryComponent';

const onOpenCreateCategoryDialog = jest.fn();
const onShowCreateCategoryDialog = jest.fn();
const onCloseCreateCategoryDialog = jest.fn();
const onSubmitCategory = jest.fn();
const onOpenUpdateCategoryDialog = jest.fn();
const onCloseUpdateCategoryDialog = jest.fn();
const onShowUpdateCategoryDialog = jest.fn();
const onUpdateCategory = jest.fn();
const onDeleteCategory = jest.fn();
let selectedCategoryIds = [1];

const shallowWrapper = shallow(
  <ActionBarCategoryComponent
    onOpenCreateCategoryDialog={onOpenCreateCategoryDialog}
    onShowCreateCategoryDialog={onShowCreateCategoryDialog}
    onCloseCreateCategoryDialog={onCloseCreateCategoryDialog}
    onSubmitCategory={onSubmitCategory}
    onOpenUpdateCategoryDialog={onOpenUpdateCategoryDialog}
    onCloseUpdateCategoryDialog={onCloseUpdateCategoryDialog}
    onShowUpdateCategoryDialog={onShowUpdateCategoryDialog}
    onUpdateCategory={onUpdateCategory}
    selectedCategoryIds={selectedCategoryIds}
    onDeleteCategory={onDeleteCategory}
  />
);

describe('ActionBarCategoryComponent', () => {
  it('onOpenCreateCategoryDialog', () => {
    shallowWrapper.find('#CREATE').simulate('click');
    expect(onOpenCreateCategoryDialog).toHaveBeenCalled();
  });
  it('onOpenUpdateCategoryDialog', () => {
    shallowWrapper.find('#UPDATE').simulate('click');
    expect(onOpenUpdateCategoryDialog).toHaveBeenCalled();
  });
  it('onDeleteCategory', () => {
    shallowWrapper.find('#DELETE').simulate('click');
    expect(onDeleteCategory).toHaveBeenCalled();
  });
});
