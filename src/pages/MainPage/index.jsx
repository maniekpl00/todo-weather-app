import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import WeatherContainer from '../../containers/WeatherContainer';
import TaskContainer from '../../containers/TaskContainer';
import withLanguage from '../../hoc/withLanguage';
import MenuContainer from '../../containers/MenuContainer';

const MainPage = () => {
  return (
    <MainLayout>
      <WeatherContainer />
      <TaskContainer />
      <MenuContainer />
    </MainLayout>
  );
};

export default withLanguage(MainPage);
