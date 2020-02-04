import React from 'react';
import { mount } from 'enzyme';
import { TenMinutesRecipes } from '../TenMinutesRecipes';

describe('TenMinutesRecipes', () => {
  let component;

  describe('when the prop tenMinutesRecipes is empty should do not render', () => {
    const props = {
      baseUri: '',
      tenMinutesRecipes: [],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<TenMinutesRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(false);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(false);
    });
  });

  describe('when the prop tenMinutesRecipes is not empty should render', () => {
    const props = {
      baseUri: '',
      tenMinutesRecipes: [{
        123: 'test'
      }],
      error: '',
      loading: false,
    };
  
    beforeEach(() => {
      component = mount(<TenMinutesRecipes {...props} />);
    });

    test('Category', () => {
      expect(component.find('Category').exists()).toBe(true);
    });

    test('ViewDetails', () => {
      expect(component.find('ViewDetails').exists()).toBe(true);
    });
  });
});
