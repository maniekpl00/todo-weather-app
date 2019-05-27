import React from 'react';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';
import TaskContainer from '../../containers/TaskContainer/TaskContainer';

const MainPage = () => {
  return (
    <PageLayout>
      <WeatherContainer />
      <TaskContainer />
    </PageLayout>
  );
};

export default MainPage;
