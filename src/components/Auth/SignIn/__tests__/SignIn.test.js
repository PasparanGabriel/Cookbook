import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from '../SignIn';

describe('SignIn', () => {
  describe('auth.uid is empty should render', () => {
    let component;
    const props = {
      auth: {
        uid: ''
      },
      authErrorSignIn: 'Error',
    };

    beforeEach(() => {
      component = shallow(<SignIn {...props} />);
    });

    test('ContainerCentral', () => {
      expect(component.find('ContainerCentral').exists()).toBe(true);
    });

    test('h1 with text Sign In', () => {
      expect(component.find('h1').text().includes('Sign In')).toBe(true);
    });

    describe('authErrorSignIn is not empty', () => {
      test('Error', () => {
        expect(component.find('h2').text().includes('Error')).toBe(true);
      });
    });

    test('Input for email', () => {
      expect(component.find('form').find('Input').at(0).prop('name').includes('email')).toBe(true);
    });

    test('Input for password', () => {
      expect(component.find('form').find('Input').at(1).prop('name').includes('password')).toBe(true);
    });

    test('button for Sign In', () => {
      expect(component.find('Button').at(0).prop('children')).toBe('Sign in');
    });

    test('a span with text OR', () => {
      expect(component.find('span').text().includes('OR')).toBe(true);
    });

    test('button for Sign Up', () => {
      expect(component.find('Button').at(1).prop('children')).toBe('Sign up');
    });
  });

  describe('auth.uid is not empty', () => {
    let component;
    const props = {
      auth: {
        uid: 'id'
      },
      authErrorSignIn: ''
    };

    beforeEach(() => {
      component = shallow(<SignIn {...props} />);
    });

    test('redirect to /', () => {
      expect(component.find('Redirect').prop('to')).toBe('/');
    });
  });
});
