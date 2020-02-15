import React from 'react';
import { mount } from 'enzyme';
import { BeefRecipes } from '../BeefRecipes';

describe('BeefRecipes', () => {
  let component;

  describe('when the prop beefRecipes is empty should do not render', () => {
    const props = {
      beefRecipes: [],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<BeefRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(false);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(false);
    });
  });

  describe('when the prop beefRecipes is not empty should render', () => {
    const props = {
      beefRecipes: [{
        123: 'test'
      }],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<BeefRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(true);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(true);
    });
  });
});
