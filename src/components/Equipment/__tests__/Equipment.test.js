import React from 'react';
import { mount } from 'enzyme';
import { Equipment } from '../Equipment';

describe('Equipment', () => {
  describe('error is not empty', () => {
    let component;
    const props = {
      dispatch: jest.fn(),
      error: 'Error',
      id: 123,
      loading: false,
      equipment: [
        {
          123: {
            image: 'image123',
            name: 'name123'
          }
        }
      ]
    };
  
    beforeEach(() => {
      component = mount(<Equipment {...props} />);
    });

    test('should render message Error', () => {
      expect(component.text().includes('Error')).toBe(true);
    });
  });

  describe('loading is true', () => {
    let component;
    const props = {
      dispatch: jest.fn(),
      error: '',
      id: 123,
      loading: true,
      equipment: [
        {
          123: {
            image: 'image123',
            name: 'name123'
          }
        }
      ]
    };
  
    beforeEach(() => {
      component = mount(<Equipment {...props} />);
    });

    test('should render Loading', () => {
      expect(component.text().includes('Loading')).toBe(true);
    });
  });

  describe('equipment is not empty', () => {
    let component;
    const props = {
      dispatch: jest.fn(),
      error: '',
      id: 123,
      loading: false,
      equipment: [
        {
          123: {
            image: 'image123',
            name: 'name123'
          }
        }
      ]
    };
  
    beforeEach(() => {
      component = mount(<Equipment {...props} />);
    });

    test('should render Equipment', () => {
      expect(component.find(Equipment).exists()).toBe(true);
    });
  });
});
