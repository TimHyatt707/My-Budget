import React from 'react';
import { shallow } from 'enzyme';

import ActionBarTransactionComponent from './../components/ActionBarTransactionComponent';

const onOpenCreateTransactionDialog = jest.fn();
const onOpenUpdateTransactionDialog = jest.fn();
const onDeleteTransaction = jest.fn();
let selectedTransactionIds = [1, 2];

const shallowWrapper = shallow(
  <ActionBarTransactionComponent
    onOpenCreateTransactionDialog={onOpenCreateTransactionDialog}
    onOpenUpdateTransactionDialog={onOpenUpdateTransactionDialog}
    onDeleteTransaction={onDeleteTransaction}
    selectedTransactionIds={selectedTransactionIds}
  />
);

describe('ActionBarTransactionComponent', () => {
  it('onOpenCreateTransactionDialog', () => {
    shallowWrapper.find('#CREATE').simulate('click');
    expect(onOpenCreateTransactionDialog).toHaveBeenCalled();
  });
  it('onOpenUpdateCategoryDialog', () => {
    shallowWrapper.find('#UPDATE').simulate('click');
    expect(onOpenUpdateTransactionDialog).toHaveBeenCalled();
  });
  it('onDeleteCategory', () => {
    shallowWrapper.find('#DELETE').simulate('click');
    expect(onDeleteTransaction).toHaveBeenCalled();
  });
});
