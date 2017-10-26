import React from 'react';
import { shallow } from 'enzyme';

import NavbarComponent from './../components/NavbarComponent.js';

const pageTitle = 'Home Page';
const pages = null;

const shallowWrapper = shallow(
  <NavbarComponent pageTitle={pageTitle} pages={pages} />
);

describe('NavbarComponent', () => {
  it('IconMenu', () => {
    expect(shallowWrapper.find('IconMenu')).toHaveLength(1);
  });
  it('MenuItem', () => {
    expect(shallowWrapper.find('MenuItem')).toHaveLength(3);
  });
});
