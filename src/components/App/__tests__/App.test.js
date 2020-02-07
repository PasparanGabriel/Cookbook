import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from '../../Navbar'
import { App } from '../App';

describe('App should render', () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  test('Navbar', () => {
    expect(component.find(Navbar).exists()).toBe(true);
  });

  test('Route with path /', () => {
    expect(component.find('Route').at(0).prop('path')).toBe('/');
  });

  test('Route with path /sign-in', () => {
    expect(component.find('Route').at(1).prop('path')).toBe('/sign-in');
  });

  test('Route with path /sign-up', () => {
    expect(component.find('Route').at(2).prop('path')).toBe('/sign-up');
  });
});
