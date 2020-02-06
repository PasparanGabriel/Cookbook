import React from 'react';
import { mount } from 'enzyme';
import { Ingredients } from '../Ingredients';

describe('Ingredients', () => {
  describe('error is not empty', () => {
    let component;
    const props = {
      dispatch: jest.fn(),
      error: 'Error',
      id: 123,
      loading: false,
      ingredientsRecipes: [
        {
          123: {
            image: 'image123',
            name: 'name123',
            amount: {
              metric: {
                value: '1',
                unit: 'g'
              }
            }
          }
        }
      ]
    };
  
    beforeEach(() => {
      component = mount(<Ingredients {...props} />);
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
      ingredientsRecipes: [
        {
          123: {
            image: 'image123',
            name: 'name123',
            amount: {
              metric: {
                value: '1',
                unit: 'g'
              }
            }
          }
        },
      ]
    };
  
    beforeEach(() => {
      component = mount(<Ingredients {...props} />);
    });

    test('should render Loading', () => {
      expect(component.text().includes('Loading')).toBe(true);
    });
  });

  describe('ingredientsRecipes is not empty', () => {
    let component;
    const props = {
      dispatch: jest.fn(),
      error: '',
      id: 123,
      loading: false,
      ingredientsRecipes: [
        {
          123: {
            image: 'image123',
            name: 'name123',
            amount: {
              metric: {
                value: '1',
                unit: 'g'
              }
            }
          }
        }
      ]
    };
  
    beforeEach(() => {
      component = mount(<Ingredients {...props} />);
    });

    test('should render Ingredients', () => {
      expect(component.find(Ingredients).exists()).toBe(true);
    });
  });
});
