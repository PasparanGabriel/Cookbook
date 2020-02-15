import React from 'react';
import { mount } from 'enzyme';
import { Category } from '../Category';

describe('Category', () => {
  describe('category is not empty', () => {
    let component;
    const props = {
      category: [
        {
          id: 123,
          image: 'image123',
          title: 'title123',
          servings: '4',
          readyInMinutes: '30'
        }
      ],
      openModal: jest.fn(),
      title: 'Title'
    };
  
    beforeEach(() => {
      component = mount(<Category {...props} />);
    });

    test('should render h1 with Title', () => {
      expect(component.find('h1').text().includes('Title')).toBe(true);
    });

    test('should render Image', () => {
      expect(component.find('Image').at(0).exists()).toBe(true);
    });

    test('Image has type category', () => {
      expect(component.find('Image').at(0).prop('type')).toBe('category');
    });

    test('should render Button', () => {
      expect(component.find('Button').exists()).toBe(true);
    });

    test('Button has name View details', () => {
      expect(component.find('Button').text().includes('View details')).toBe(true);
    });

    test('Button has type viewDetailsBtn', () => {
      expect(component.find('Button').prop('type')).toBe('viewDetailsBtn');
    });

    describe('and servings & readyInMinutesImg is not empty', () => {
      test('should render p with title123', () => {
        expect(component.find('p').text().includes('title123')).toBe(true);
      });

      test('should render Image for servings', () => {
        expect(component.find('Image').at(1).exists()).toBe(true);
      });

      test('should render span with 4 servings', () => {
        expect(component.find('span').at(0).text().includes('4 servings')).toBe(true);
      });

      test('should render Image for readyInMinutesImg', () => {
        expect(component.find('Image').at(2).exists()).toBe(true);
      });

      test('should render span with 30 mins', () => {
        expect(component.find('span').at(1).text().includes('30 mins')).toBe(true);
      });
    });

    describe('and servings is not empty & readyInMinutesImg is empty', () => {
      const props = {
        category: [
          {
            id: 123,
            image: 'image123',
            title: 'title123',
            servings: '4',
            readyInMinutes: ''
          }
        ],
        openModal: jest.fn(),
        title: 'Title'
      };
    
      beforeEach(() => {
        component = mount(<Category {...props} />);
      });

      test('should render p with title123', () => {
        expect(component.find('p').text().includes('title123')).toBe(true);
      });

      test('should render Image for servings', () => {
        expect(component.find('Image').at(1).exists()).toBe(true);
      });

      test('should render span with 4 servings', () => {
        expect(component.find('span').at(0).text().includes('4 servings')).toBe(true);
      });
    });

    describe('and servings is empty & readyInMinutesImg is not empty', () => {
      const props = {
        category: [
          {
            id: 123,
            image: 'image123',
            title: 'title123',
            servings: '',
            readyInMinutes: '30'
          }
        ],
        openModal: jest.fn(),
        title: 'Title'
      };
    
      beforeEach(() => {
        component = mount(<Category {...props} />);
      });

      test('should render p with title123', () => {
        expect(component.find('p').text().includes('title123')).toBe(true);
      });

      test('should render Image for readyInMinutes', () => {
        expect(component.find('Image').at(1).exists()).toBe(true);
      });

      test('should render span with 30 mins', () => {
        expect(component.find('span').at(0).text().includes('30 mins')).toBe(true);
      });
    });
  });
});
