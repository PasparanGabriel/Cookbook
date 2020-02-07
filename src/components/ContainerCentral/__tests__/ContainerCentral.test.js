import React from 'react';
import { mount } from 'enzyme';
import { ContainerCentral } from '../ContainerCentral';

describe('ContainerCentral', () => {
  const props = {
    children: 'Test'
  };

  const component = mount(<ContainerCentral {...props} />);

  test('should render message Test', () => {
    expect(component.text().includes('Test')).toBe(true);
  });
});
