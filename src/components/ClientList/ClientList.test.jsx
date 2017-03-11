import React from 'react';

import { shallow } from 'enzyme';

import ClientList from './ClientList.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('ClientList', () => {
  it('matches snapshot', () => {
    const chats = [
      { client: { first_name: 'Robert', last_name: 'waffle' } },
      { client: { first_name: 'Lisa', last_name: 'pancake' } },
    ];
    const component = shallow(<ClientList chats={chats} store={store} />);

    expect(component).toMatchSnapshot();
  });
});
