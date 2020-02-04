import React from 'react';
import { mount } from 'enzyme';
import { Loading } from '../';

describe('Loading', () => {
  let component;

  beforeEach(() => {
    component = mount(<Loading />);
  });

  test('has the name Loading', () => {
    expect(component.text().includes('Loading')).toBe(true);
  });
});
