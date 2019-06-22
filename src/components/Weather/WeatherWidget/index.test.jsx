import React from 'react';
import { shallow } from 'enzyme';

import { WeatherWidget } from './index';
import { Humadity, Pressure, WindSpeed } from './index.styles';

const props = {
  intl: {
    formatMessage: () => '',
  },
  data: {
    coord: {
      lon: 19.98,
      lat: 50.08,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    main: {
      temp: 25.64,
      pressure: 1012,
      humidity: 60,
    },
    wind: {
      speed: 5.7,
      deg: 60,
    },
    clouds: {
      all: 75,
    },
    dt: 1559732239,
    name: 'Prądnik Czerwony',
  },
};

const createMockElement = () => <WeatherWidget {...props} />;

describe('<WeatherWidger data={data} /> Modal opened', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(createMockElement());
  });

  it('<WeatherWidget data={data} /> contains <Humadity /> with substring', () => {
    expect(
      wrapper
        .find(Humadity)
        .text()
        .includes(`${props.data.main.humidity}%`),
    ).toBeTruthy();
  });

  it('<WeatherWidget data={data} /> contains <Pressure /> with substring', () => {
    expect(
      wrapper
        .find(Pressure)
        .text()
        .includes(`${props.data.main.pressure} hPa`),
    ).toBeTruthy();
  });

  it('<WeatherWidget data={data} /> contains <WindSpeed /> with substring', () => {
    const windSpeed = (props.data.wind.speed * 3.6).toFixed(2);
    expect(
      wrapper
        .find(WindSpeed)
        .text()
        .includes(`${windSpeed} km/h`),
    ).toBeTruthy();
  });
});
