/* eslint-disable */
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navigation from './__mocks__/Navigation';

it('Navigation links are working', () => {
  const tree = renderer.create(<Navigation />).toJSON();
  expect(tree).toMatchSnapshot();
});
