import React from 'react';
import { mount } from 'enzyme';
import { Button } from '../';

describe('Button', () => {
  let component;

  const props = {
    borderRadius: false,
    children: 'Info',
    onClick: jest.fn(),
    position: '',
    size: '',
    type: 'info'
  };

  beforeEach(() => {
    component = mount(<Button {...props} />);
  });

  test('should render ', () => {
    expect(component.find('button').exists()).toBe(true);
  });

  test('has the name Info', () => {
    expect(component.text().includes('Info')).toBe(true);
  });

  test('run at onClick', () => {
    component.find('button').simulate('click');
    expect(props.onClick.mock.calls.length).toEqual(1);
  });
});
