import React from 'react';
import { create } from 'react-test-renderer';
import Spinner from './Spinner';

describe('Spinner', () => {
  test('snapshot', () => {
    const out = create(<Spinner />).toJSON();
    expect(out).toMatchSnapshot();
  });
});
