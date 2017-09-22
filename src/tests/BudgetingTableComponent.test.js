import React from 'react';
import { shallow } from 'enzyme';

import BudgetingTableComponent from './../components/BudgetingTableComponent';

const shallowWrapper = shallow(<BudgetingTableComponent />);

describe('TransactionPreviewComponent', () => {
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
    expect(shallowWrapper.find('TableHeaderColumn')).toHaveLength(3);
  });
  it('TableBody', () => {
    expect(shallowWrapper.find('TableBody')).toHaveLength(1);
  });
});
