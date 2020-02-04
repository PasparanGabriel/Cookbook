import React from 'react';
import { mount } from 'enzyme';
import { Image } from '../';

describe('Image', () => {
  let component;
  const props = {
    alt: 'alt123',
    src: 'src123'
  };

  beforeEach(() => {
    component = mount(<Image {...props} />);
  });

  test('has alt = alt123', () => {
    expect(component.find('img').prop('alt')).toEqual('alt123');
  });

  test('has src = src123', () => {
    expect(component.find('img').prop('src')).toEqual('src123');
  });
});
