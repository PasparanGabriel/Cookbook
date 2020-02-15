import React from 'react';
import { mount } from 'enzyme';
import { PorkRecipes } from '../PorkRecipes';

describe('PorkRecipes', () => {
  let component;

  describe('when the prop porkRecipes is empty should do not render', () => {
    const props = {
      porkRecipes: [],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<PorkRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(false);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(false);
    });
  });

  describe('when the prop porkRecipes is not empty should render', () => {
    const props = {
      porkRecipes: [{
        123: 'test'
      }],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<PorkRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(true);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(true);
    });
  });
});
