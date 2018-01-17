import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../button';

it('Should fire when clicked',() => {
  const callback = jest.fn();
  const wrapper = mount(<Button onClick={callback} />);
  wrapper.simulate('click');
  expect(callback).toHaveBeenCalled;
});