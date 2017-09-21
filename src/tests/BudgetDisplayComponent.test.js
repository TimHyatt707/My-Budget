import React from 'react';
import { shallow } from 'enzyme';

import BudgetDisplayComponent from './../components/BudgetDisplayComponent';

let totalSpent = 0;
let totalLimit = 0;

const shallowWrapper = shallow(
  <BudgetDisplayComponent totalSpent={totalSpent} totalLimit={totalLimit} />
);

describe('BudgetDisplayComponent', () => {
  it('IconMenu', () => {
    expect(shallowWrapper.find('FontIcon')).toHaveLength(2);
  });
});
