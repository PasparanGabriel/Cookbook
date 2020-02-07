import React from 'react';
import { shallow } from 'enzyme';
import { SignOut } from '../../Auth/SignOut'
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  describe('should render', () => {
    let component;
    const props = {
      auth: {
        uid: ''
      }
    };

    beforeEach(() => {
      component = shallow(<Navbar {...props} />);
    });

    test('Link to home page', () => {
      expect(component.find('Link').prop('to')).toBe('/');
    });

    test('Link name as Cookbook', () => {
      expect(component.find('Link').text().includes('Cookbook')).toBe(true);
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
      component = shallow(<Navbar {...props} />);
    });

    test('SignOut component', () => {
      expect(component.find(SignOut).exists()).toBe(true);
    });

    test('item with text Sign Out', () => {
      expect(component.find('li').at(0).text().includes('Sign Out')).toBe(true);
    });
  });
});
