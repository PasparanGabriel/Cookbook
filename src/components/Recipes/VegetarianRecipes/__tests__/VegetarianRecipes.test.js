import React from 'react';
import { mount } from 'enzyme';
import { VegetarianRecipes } from '../VegetarianRecipes';

describe('VegetarianRecipes', () => {
  let component;

  describe('when the prop vegetarianRecipes is empty should do not render', () => {
    const props = {
      vegetarianRecipes: [],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<VegetarianRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(false);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(false);
    });
  });

  describe('when the prop vegetarianRecipes is not empty should render', () => {
    const props = {
      vegetarianRecipes: [{
        123: 'test'
      }],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<VegetarianRecipes {...props} /> );
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(true);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(true);
    });
  });
});
