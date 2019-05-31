import React from 'react';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';
import TaskContainer from '../../containers/TaskContainer/TaskContainer';
import withLanguage from '../../hoc/withLanguage/withLanguage';

const MainPage = () => {
  return (
    <PageLayout>
      <WeatherContainer />
      <TaskContainer />
    </PageLayout>
  );
};

export default withLanguage(MainPage);
