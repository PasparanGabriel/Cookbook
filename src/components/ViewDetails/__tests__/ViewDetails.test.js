import React from 'react';
import { shallow } from 'enzyme';
import { CookingInstructions } from '../../CookingInstructions'
import { Equipment } from '../../Equipment'
import { Ingredients } from '../../Ingredients'
import { Summary } from '../../Summary'
import { ViewDetails } from '../ViewDetails';

describe('ViewDetails', () => {
  describe('if show is false', () => {
    let component;
    const props = {
      close: jest.fn(),
      id: 123,
      show: false
    };
  
    beforeEach(() => {
      component = shallow(<ViewDetails {...props} />);
    });

    test('should do not render the component Button', () => {
      expect(component.find('Button').exists()).toBe(false);
    });

    test('should do not render the component Summary', () => {
      expect(component.find(Summary).exists()).toBe(false);
    });

    test('should do not render the component Ingredients', () => {
      expect(component.find(Ingredients).exists()).toBe(false);
    });

    test('should do not render the component Equipment', () => {
      expect(component.find(Equipment).exists()).toBe(false);
    });

    test('should do not render the component CookingInstructions', () => {
      expect(component.find(CookingInstructions).exists()).toBe(false);
    });
  });

  describe('if show is true', () => {
    let component;
    const props = {
      close: jest.fn(),
      id: 123,
      show: true
    };
  
    beforeEach(() => {
      component = shallow(<ViewDetails {...props} />);
    });

    test('should render the component Button', () => {
      expect(component.find('Button').exists()).toBe(true);
    });

    test('should render the component Summary', () => {
      expect(component.find(Summary).exists()).toBe(true);
    });

    test('should render the component Ingredients', () => {
      expect(component.find(Ingredients).exists()).toBe(true);
    });

    test('should render the component Equipment', () => {
      expect(component.find(Equipment).exists()).toBe(true);
    });

    test('should render the component CookingInstructions', () => {
      expect(component.find(CookingInstructions).exists()).toBe(true);
    });
  });
});
