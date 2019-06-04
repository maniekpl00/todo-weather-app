import React from 'react';
import PageLayout from '../../layouts/PageLayout/PageLayout';
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';
import TaskContainer from '../../containers/TaskContainer/TaskContainer';
import withLanguage from '../../hoc/withLanguage/withLanguage';
import MenuContainer from '../../containers/MenuContainer/MenuContainer';

const MainPage = () => {
	return (
		<PageLayout>
			<WeatherContainer />
			<TaskContainer />
			<MenuContainer />
		</PageLayout>
	);
};

export default withLanguage(MainPage);
