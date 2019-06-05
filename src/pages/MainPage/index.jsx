import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import WeatherContainer from '../../containers/WeatherContainer';
import TaskContainer from '../../containers/TaskContainer';
import withLanguage from '../../hoc/withLanguage';
import MenuContainer from '../../containers/MenuContainer';

const MainPage = props => {
  return (
    <PageLayout>
      <WeatherContainer />
      <TaskContainer />
      <MenuContainer />
    </PageLayout>
  );
};

export default withLanguage(MainPage);
