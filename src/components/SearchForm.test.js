import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from './SearchForm';

it('should render an `.input-error` correctly', () => {
  const wrapper = shallow(<SearchForm />);
  expect(wrapper.find('.input-error')).toHaveLength(0);
  wrapper.setState({ inputError: true });
  expect(wrapper.find('.input-error')).toHaveLength(1);
});

it('Should show input error on invalid search value', () => {
  const wrapper = mount(<SearchForm />);
  wrapper.setState({ value: '' });
  wrapper.find('form').simulate('submit');
  expect(wrapper.state().inputError).toBeTruthy();
});

// Needs full-dom rendering to work
it('should call function passed in on submit with correct value', () => {
  const findRestaurantsFn = jest.fn();
  const wrapper = mount(<SearchForm findRestaurants={findRestaurantsFn} />);
  wrapper.setState({ value: 'se19' });
  wrapper.find('form').simulate('submit');
  expect(findRestaurantsFn).toHaveBeenCalledWith('se19');
});
