import React from 'react';
import { shallow, mount } from 'enzyme';

import Gallery from '../gallery';
import Button from '../button';

it('Renders without crashing',() => {
  shallow(<Gallery />);
})

it('Renders the main page', () => {
  const wrapper = shallow(<Gallery />)
  expect(wrapper.hasClass('mainPage')).toEqual(true);
})

it('Should switch showGallery to when true', () => {
  const wrapper = shallow(<Gallery />);
  wrapper.instance().toggle(true);
  wrapper.update();
  expect(wrapper.state('showGallery')).toEqual(true);

})

it('Should update the state when the button is clicked', () => {
 const callback = jest.fn()
 const wrapper = mount(<Gallery onClick={callback} />);


})