import React from 'react';
import { mount } from 'enzyme';
import { Error } from '../';

describe('Error', () => {
  let component;

  describe('should do not render text', () => {
    const props = {
      err: ''
    };
  
    beforeEach(() => {
      component = mount(<Error {...props} />);
    });
  
    test('Error', () => {
      expect(component.text().includes('Error')).toBe(false);
    });
  });

  describe('should render text', () => {
    const props = {
      err: 'Error'
    };
  
    beforeEach(() => {
      component = mount(<Error {...props} />);
    });
  
    test('Error', () => {
      expect(component.text().includes('Error')).toBe(true);
    });
  });
});
