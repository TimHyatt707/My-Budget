import React from 'react';
import { shallow } from 'enzyme';

import TransactionTableComponent from './../components/TransactionTableComponent';

const shallowWrapper = shallow(<TransactionTableComponent />);

describe('TransactionTableComponent', () => {
  it('Table', () => {
    expect(shallowWrapper.find('Table')).toHaveLength(1);
  });
  it('TableRow', () => {
    expect(shallowWrapper.find('TableRow')).toHaveLength(1);
  });
  it('TableHeader', () => {
    expect(shallowWrapper.find('TableHeader')).toHaveLength(1);
  });
  it('TableHeaderColumn', () => {
    expect(shallowWrapper.find('TableHeaderColumn')).toHaveLength(4);
  });
  it('TableBody', () => {
    expect(shallowWrapper.find('TableBody')).toHaveLength(1);
  });
});
