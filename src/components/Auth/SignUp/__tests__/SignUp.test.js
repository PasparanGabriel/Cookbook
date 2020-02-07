import React from 'react';
import { shallow } from 'enzyme';
import { SignUp } from '../SignUp';

describe('SignUp', () => {
  describe('auth.uid is empty should render', () => {
    let component;
    const props = {
      auth: {
        uid: ''
      },
      authErrorSignUp: 'Error',
    };

    beforeEach(() => {
      component = shallow(<SignUp {...props} />);
    });

    test('ContainerCentral', () => {
      expect(component.find('ContainerCentral').exists()).toBe(true);
    });

    test('h1 with text Sign Up', () => {
      expect(component.find('h1').text().includes('Sign Up')).toBe(true);
    });

    describe('authErrorSignUp is not empty', () => {
      test('should render Error', () => {
        expect(component.find('h2').text().includes('Error')).toBe(true);
      });
    });

    test('Input for First name', () => {
      expect(component.find('form').find('Input').at(0).prop('name').includes('firstName')).toBe(true);
    });

    test('Input for Last name', () => {
      expect(component.find('form').find('Input').at(1).prop('name').includes('lastName')).toBe(true);
    });

    test('Input for email', () => {
      expect(component.find('form').find('Input').at(2).prop('name').includes('email')).toBe(true);
    });

    test('Input for password', () => {
      expect(component.find('form').find('Input').at(3).prop('name').includes('password')).toBe(true);
    });

    test('button for Sign up', () => {
      expect(component.find('Button').at(0).prop('children')).toBe('Sign up');
    });

    test('a span with text OR', () => {
      expect(component.find('span').text().includes('OR')).toBe(true);
    });

    test('button for Sign in', () => {
      expect(component.find('Button').at(1).prop('children')).toBe('Sign in');
    });
  });

  describe('auth.uid is not empty', () => {
    let component;
    const props = {
      auth: {
        uid: 'id'
      },
      authErrorSignUp: ''
    };

    beforeEach(() => {
      component = shallow(<SignUp {...props} />);
    });

    test('redirect to /', () => {
      expect(component.find('Redirect').prop('to')).toBe('/');
    });
  });
});
