import React from 'react';

import { shallow } from 'enzyme';

import ConversationList from './ConversationList.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('Chat', () => {
  it('matches snapshot', () => {
    const component = shallow(<ConversationList store={store} />);

    expect(component).toMatchSnapshot();
  });
});
