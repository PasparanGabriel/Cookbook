import React from 'react';
import { mount } from 'enzyme';
import { CookingInstructions } from '../CookingInstructions';

describe('CookingInstructions', () => {
  describe('error is not empty', () => {
    let component;
    const props = {
      dispatch: jest.fn(),
      error: 'Error',
      id: 123,
      loading: false,
      cookingInstructions: [
        {
          123: {
            number: '1',
            step: 'step'
          }
        }
      ]
    };
  
    beforeEach(() => {
      component = mount(<CookingInstructions {...props} />);
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
      cookingInstructions: [
        {
          123: {
            number: '1',
            step: 'step'
          }
        }
      ]
    };
  
    beforeEach(() => {
      component = mount(<CookingInstructions {...props} />);
    });

    test('should render Loading', () => {
      expect(component.text().includes('Loading')).toBe(true);
    });
  });

  describe('cookingInstructions is not empty', () => {
    let component;
    const props = {
      dispatch: jest.fn(),
      error: '',
      id: 123,
      loading: false,
      cookingInstructions: [
        {
          123: {
            number: '1',
            step: 'step'
          }
        }
      ]
    };
  
    beforeEach(() => {
      component = mount(<CookingInstructions {...props} />);
    });

    test('should render CookingInstructions', () => {
      expect(component.find(CookingInstructions).exists()).toBe(true);
    });
  });
});
