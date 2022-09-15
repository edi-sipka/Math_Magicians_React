/* eslint-disable */

import operate from './operate';

it('Do the operation of two numbers', () => {
  expect(operate(5, 5, '+')).toBe('10');
});
it('Do the operation of two numbers', () => {
  expect(operate(5, 5, '-')).toBe('0');
});
it('Do the operation of two numbers', () => {
  expect(operate(5, 5, 'x')).toBe('25');
});
it('Do the operation of two numbers', () => {
  expect(operate(5, 5, '÷')).toBe('1');
});
it('Do the operation of two numbers', () => {
  expect(operate(8, 5, '%')).toBe('3');
});
