import React from 'react';
import { mount } from 'enzyme';
import { SignOut } from '../SignOut';

describe('SignOut', () => {
  let component;

  const props = {
    onClick: jest.fn(),
    signOut: jest.fn()
  };

  beforeEach(() => {
    component = mount(<SignOut {...props} />);
  });

  test('should render a button', () => {
    expect(component.find('button').exists()).toBe(true);
  });

  test('button has type info', () => {
    expect(component.find('Button').prop('type').includes('info')).toBe(true);
  });

  test('button has position right', () => {
    expect(component.find('Button').prop('position').includes('right')).toBe(true);
  });

  test('button has the name Sign out', () => {
    expect(component.text().includes('Sign out')).toBe(true);
  });
});
