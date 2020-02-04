import React from 'react';
import { mount } from 'enzyme';
import { MaxCaloriesRecipes } from '../MaxCaloriesRecipes';

describe('MaxCaloriesRecipes', () => {
  let component;

  describe('when the prop maxCaloriesRecipes is empty should do not render', () => {
    const props = {
      baseUri: '',
      maxCaloriesRecipes: [],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<MaxCaloriesRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(false);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(false);
    });
  });

  describe('when the prop maxCaloriesRecipes is not empty should render', () => {
    const props = {
      baseUri: '',
      maxCaloriesRecipes: [{
        123: 'test'
      }],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<MaxCaloriesRecipes {...props} /> );
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(true);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(true);
    });
  });
});
