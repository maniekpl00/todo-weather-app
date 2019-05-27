import React from 'react';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import WeatherHandler from '../../containers/WeatherHandler/WeatherHandler';
import TaskListContainer from '../../containers/TaskListContainer/TaskListContainer';

const MainPage = () => {
  return (
    <PageLayout>
      <WeatherHandler />
      <TaskListContainer />
    </PageLayout>
  );
};

export default MainPage;
