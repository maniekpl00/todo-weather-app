import React from 'react';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import WeatherHandler from '../../containers/WeatherHandler/WeatherHandler';
import TaskHandler from '../../containers/TaskHandler/TaskHandler';

const MainPage = () => {
  return (
    <PageLayout>
      <WeatherHandler />
      <TaskHandler />
    </PageLayout>
  );
};

export default MainPage;
