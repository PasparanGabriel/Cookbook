import React from 'react';
import { mount } from 'enzyme';
import { Input } from '../';

describe('Input', () => {
  let component;
  const props = {
    children: true,
    onChange: jest.fn(),
    name: 'name123',
    placeholder: 'placeholder123',
    type: 'text',
    value: 'value123'
  };

  beforeEach(() => {
    component = mount(<Input {...props} />);
  });
  
  test('has class wrongValue when children is true', () => {
    expect(component.find('input').hasClass('wrongValue')).toBe(true);
  });

  test('has name = name123', () => {
    expect(component.find('input').prop('name')).toEqual('name123');
  });

  test('run at onChange', () => {
    component.find('input').simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });

  test('has the name of the label = placeholder', () => {
    expect(component.find('label').text()).toEqual('placeholder123');
  });

  test('has type = text', () => {
    expect(component.find('input').prop('type')).toEqual('text');
  });

  test('has value = value123', () => {
    expect(component.find('input').prop('value')).toEqual('value123');
  });
});
