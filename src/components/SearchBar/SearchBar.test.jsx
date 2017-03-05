import React from 'react';

import { shallow } from 'enzyme';

import SearchBar from './SearchBar.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('SearchBar', () => {
  it('matches snapshot', () => {
    const component = shallow(<SearchBar store={store} />);

    expect(component).toMatchSnapshot();
  });
});
