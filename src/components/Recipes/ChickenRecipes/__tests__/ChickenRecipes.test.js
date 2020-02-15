import React from 'react';
import { mount } from 'enzyme';
import { ChickenRecipes } from '../ChickenRecipes';

describe('ChickenRecipes', () => {
  let component;

  describe('when the prop chickenRecipes is empty should do not render', () => {
    const props = {
      chickenRecipes: [],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<ChickenRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(false);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(false);
    });
  });

  describe('when the prop chickenRecipes is not empty should render', () => {
    const props = {
      chickenRecipes: [{
        123: 'test'
      }],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<ChickenRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(true);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(true);
    });
  });
});
