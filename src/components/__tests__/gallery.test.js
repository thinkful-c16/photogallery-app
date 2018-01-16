import React from 'react';
import { shallow } from 'enzyme';

import Gallery from '../gallery';

it('Renders without crashing',() => {
  shallow(<Gallery />);
})