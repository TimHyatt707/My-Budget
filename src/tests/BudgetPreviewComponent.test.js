import React from 'react';
import { shallow } from 'enzyme';

import BudgetPreviewComponent from './../components/BudgetPreviewComponent';

const ChartData = [];

const shallowWrapper = shallow(
  <BudgetPreviewComponent chartData={ChartData} />
);

describe('BudgetPreviewComponent', () => {
  it('PieChart', () => {
    expect(shallowWrapper.find('PieChartComponent')).toHaveLength(1);
  });
  it('Paper', () => {
    expect(shallowWrapper.find('Paper')).toHaveLength(1);
  });
  it('RaisedButton', () => {
    expect(shallowWrapper.find('RaisedButton')).toHaveLength(1);
  });
});
