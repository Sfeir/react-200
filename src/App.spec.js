import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Spinner from './components/Spinner';
import { Route } from 'react-router-dom';

describe('App', () => {
  const opt = { disableLifecycleMethods: true };

  it('should display a Spinner while loading people', () => {
    const wrapper = shallow(<App peopleLoading={true} />, opt);
    expect(wrapper.containsMatchingElement(<Spinner />)).toBe(true);
  });

  it('should contain a route to /all when people loaded', () => {
    const wrapper = shallow(<App peopleLoading={false} />, opt);
    expect(wrapper.containsMatchingElement(<Route path="/all" />)).toBe(true);
  });
});
