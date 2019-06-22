import React from 'react';
import { shallow } from 'enzyme';

import { WeatherContainer } from './index';
import Spinner from '../../components/UI/Spinner';

const createMockElement = (loading, getCurrentPosition, fetchWeather) => (
  <WeatherContainer weather={{}} loading getCurrentPosition={getCurrentPosition} fetchWeather={fetchWeather} />
);

describe('<WeatherContainer getCurrentPosition, weather={} loading={true} />', () => {
  let wrapper;

  beforeEach(() => {
    const coords = {
      latitude: 12,
      longitude: 12,
    };
    const getCurrentPosition = callback => callback({ coords });
    const fetchWeather = () => ({});
    wrapper = shallow(createMockElement(true, getCurrentPosition, fetchWeather));
  });

  it('<WeatherContainer getCurrentPosition, weather={} loading={true} /> should contain <Spinner />', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find(Spinner).exists()).toBeTruthy();
  });

  it('<WeatherContainer getCurrentPosition, weather={} loading={false} /> should not contain <Spinner />', () => {
    wrapper.setProps({ loading: false });
    expect(wrapper.find(Spinner).exists()).toBeFalsy();
  });
});
