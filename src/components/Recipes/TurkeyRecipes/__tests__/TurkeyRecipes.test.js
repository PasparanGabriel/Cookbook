import React from 'react';
import { mount } from 'enzyme';
import { TurkeyRecipes } from '../TurkeyRecipes';

describe('TurkeyRecipes', () => {
  let component;

  describe('when the prop turkeyRecipes is empty should do not render', () => {
    const props = {
      turkeyRecipes: [],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<TurkeyRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(false);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(false);
    });
  });

  describe('when the prop turkeyRecipes is not empty should render', () => {
    const props = {
      turkeyRecipes: [{
        123: 'test'
      }],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount( <TurkeyRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(true);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(true);
    });
  });
});
