import React from 'react';
import { mount } from 'enzyme';
import { Summary } from '../Summary';

describe('Summary', () => {
  describe('error is not empty', () => {
    let component;
    const props = {
      dispatch: jest.fn(),
      error: 'Error',
      id: 123,
      loading: false,
      summary: {
        123: {
          title: 'title123',
          summary: 'Summary123'
        }
      }
    };
  
    beforeEach(() => {
      component = mount(<Summary {...props} />);
    });

    test('should render message Error', () => {
      expect(component.text().includes('Error')).toBe(true);
    });
  });

  describe('loading is true', () => {
    let component;
    const props = {
      dispatch: jest.fn(),
      error: '',
      id: 123,
      loading: true,
      summary: {
        123: {
          title: 'title123',
          summary: 'Summary123'
        }
      }
    };
  
    beforeEach(() => {
      component = mount(<Summary {...props} />);
    });

    test('should render Loading', () => {
      expect(component.text().includes('Loading')).toBe(true);
    });
  });

  describe('summary is not empty', () => {
    let component;
    const props = {
      dispatch: jest.fn(),
      error: '',
      id: 123,
      loading: false,
      summary: {
        123: {
          title: 'title123',
          summary: 'Summary123'
        }
      }
    };
  
    beforeEach(() => {
      component = mount(<Summary {...props} />);
    });

    test('should render summary', () => {
      expect(component.find(Summary).exists()).toBe(true);
    });

    test('should render title = title123', () => {
      expect(component.find('h1').text().includes('title123')).toBe(true);
    });
  });
});
