import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button.jsx';

describe('Button', () => {
  it('matches basic button snapshot', () => {
    const component = shallow(<Button onClick={() => {}}>Click</Button>);

    expect(component).toMatchSnapshot();
  });

  it('matches submit button snapshot', () => {
    const component = shallow(<Button type="submit" onClick={() => {}} />);

    expect(component).toMatchSnapshot();
  });

  it('matches disabled button snapshot', () => {
    const component = shallow(<Button disabled onClick={() => {}} />);

    expect(component).toMatchSnapshot();
  });

  it('matches icon button snapshot', () => {
    const component = shallow(<Button icon="pt-icon-caret" onClick={() => {}} />);

    expect(component).toMatchSnapshot();
  });

  it('matches explicit icon button snapshot', () => {
    const component = shallow(
      <Button variant="icon" onClick={() => {}}>
        <span className="pt-icon-caret" />
      </Button>,
    );

    expect(component).toMatchSnapshot();
  });

  it('matches send button snapshot', () => {
    const component = shallow(<Button variant="send" onClick={() => {}} />);

    expect(component).toMatchSnapshot();
  });

  it('matches transparent button snapshot', () => {
    const component = shallow(<Button variant="transparent" onClick={() => {}} />);

    expect(component).toMatchSnapshot();
  });
});
