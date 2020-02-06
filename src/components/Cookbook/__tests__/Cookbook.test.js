import React from 'react';
import { shallow } from 'enzyme';
import { BeefRecipes } from '../../Recipes/BeefRecipes';
import { ChickenRecipes } from '../../Recipes/ChickenRecipes';
import { MaxCaloriesRecipes } from '../../Recipes/MaxCaloriesRecipes';
import { PorkRecipes } from '../../Recipes/PorkRecipes';
import { TenMinutesRecipes } from '../../Recipes/TenMinutesRecipes';
import { TurkeyRecipes } from '../../Recipes/TurkeyRecipes';
import { VegetarianRecipes } from '../../Recipes/VegetarianRecipes';
import { Cookbook } from '../Cookbook';

describe('Cookbook', () => {
  describe('auth.uid is empty', () => {
    let component;
    const props = {
      auth: {
        uid: ''
      }
    };

    beforeEach(() => {
      component = shallow(<Cookbook {...props} />);
    });

    test('redirect to sign-in', () => {
      expect(component.find('Redirect').prop('to')).toBe('/sign-in');
    });
  });

  describe('auth.uid is not empty should render', () => {
    let component;
    const props = {
      auth: {
        uid: 'id'
      }
    };
  
    beforeEach(() => {
      component = shallow(<Cookbook {...props} />);
    });

    test('BeefRecipes', () => {
      expect(component.find(BeefRecipes).exists()).toBe(true);
    });

    test('ChickenRecipes', () => {
      expect(component.find(ChickenRecipes).exists()).toBe(true);
    });

    test('MaxCaloriesRecipes', () => {
      expect(component.find(MaxCaloriesRecipes).exists()).toBe(true);
    });

    test('PorkRecipes', () => {
      expect(component.find(PorkRecipes).exists()).toBe(true);
    });

    test('TenMinutesRecipes', () => {
      expect(component.find(TenMinutesRecipes).exists()).toBe(true);
    });

    test('TurkeyRecipes', () => {
      expect(component.find(TurkeyRecipes).exists()).toBe(true);
    });

    test('VegetarianRecipes', () => {
      expect(component.find(VegetarianRecipes).exists()).toBe(true);
    });
  });
});
