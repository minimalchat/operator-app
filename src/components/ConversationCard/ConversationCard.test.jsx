import React from 'react';

import { shallow } from 'enzyme';

import ConversationCard from './ConversationCard.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('Chat', () => {
  it('matches snapshot', () => {
    const component = shallow(<ConversationCard store={store} />);

    expect(component).toMatchSnapshot();
  });
});
