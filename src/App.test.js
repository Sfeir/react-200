import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { cyclePerson } from './components/Discover';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('cyclePerson should return index 0 when arriving at end of list', () => {
  const given = {
    current: 2,
    people: [1, 2, 3]
  };

  const actual = cyclePerson(given);

  const expected = {
    current: 0
  };

  expect(actual).toEqual(expected);
});