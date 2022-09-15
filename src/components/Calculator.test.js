/* eslint-disable */

import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

it('Rendering 3', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
