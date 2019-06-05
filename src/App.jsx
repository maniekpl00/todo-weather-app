import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './store';
import MainPage from './pages/MainPage';

const store = configureStore();

function App() {
  return (
    <ReduxProvider store={store}>
      <MainPage />
    </ReduxProvider>
  );
}

export default App;
