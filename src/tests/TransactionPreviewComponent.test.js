import React from 'react';
import { shallow } from 'enzyme';

import TransactionPreviewComponent from './../components/TransactionPreviewComponent';

const shallowWrapper = shallow(<TransactionPreviewComponent />);

describe('TransactionPreviewComponent', () => {
  it('Table', () => {
    expect(shallowWrapper.find('Table')).toHaveLength(1);
  });
  it('TableRow', () => {
    expect(shallowWrapper.find('TableRow')).toHaveLength(1);
  });
  it('RaisedButton', () => {
    expect(shallowWrapper.find('RaisedButton')).toHaveLength(1);
  });
  it('TableHeader', () => {
    expect(shallowWrapper.find('TableHeader')).toHaveLength(1);
  });
  it('TableHeaderColumn', () => {
    expect(shallowWrapper.find('TableHeaderColumn')).toHaveLength(3);
  });
  it('TableBody', () => {
    expect(shallowWrapper.find('TableBody')).toHaveLength(1);
  });
});
