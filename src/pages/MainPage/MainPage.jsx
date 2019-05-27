import React from 'react';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';
import TaskListContainer from '../../containers/TaskListContainer/TaskListContainer';

const MainPage = () => {
  return (
    <PageLayout>
      <WeatherContainer />
      <TaskListContainer />
    </PageLayout>
  );
};

export default MainPage;
